const express=require('express')
const {isLoggedIn} = require("./middlewares");
const { REACT_SVT_GOING,REACT_SVT_IMAGE }=require('../models')
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router=express.Router()

try {
    fs.accessSync('uploads');
} catch (error) {
    console.log('uploads 폴더가 없으므로 생성합니다.');
    fs.mkdirSync('uploads');
}

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext);
            done(null, basename+ ext);
        },
    }),
    limits: {fileSize: 20 * 1024 * 1024}, // 20MB
});

router.post('/',isLoggedIn,upload.none(),async(req,res,next)=>{
    try{
        const going=await REACT_SVT_GOING.create({
            title:req.body.title,
            explain:req.body.explain,
            episode:req.body.episode,
            link:req.body.link,
            when:req.body.when,
            dday:req.body.dday
        })
        if(req.body.image){
            if (Array.isArray(req.body.image)) {
                const images = await Promise.all(req.body.image.map((image) => REACT_SVT_IMAGE.create({ src: image })));
                await going.addImages(images);
            } else {
                const image = await REACT_SVT_IMAGE.create({ src: req.body.image });
                await going.addImages(image);
            }
        }

        res.status(201).send('ok');
    }catch(err){
        console.error(err)
        next(err)
    }
})

router.post('/images',isLoggedIn,upload.array('image'),async(req,res,next)=>{
    res.json(req.files.map((v) => v.filename+".png"));
})

router.get('/:going',async(req,res,next)=>{
    try{
        const findId=Number(req.params.going)
        const going=await REACT_SVT_GOING.findOne({
            where:{id:findId},
            include:[{
                model:REACT_SVT_IMAGE,
                attributes:['id','src']
            }]
        })
        res.status(200).json(going);
    }catch(err){
        console.error(err)
        next(err)
    }
})


module.exports = router;