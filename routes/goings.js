const express=require('express')
const { REACT_SVT_GOING,REACT_SVT_IMAGE }=require('../models')
const router=express.Router()

router.get('/',async(req,res,next)=>{
    try{
        const going=await REACT_SVT_GOING.findAll({
            limit:25,
            order:['dday'],
            attributes:['id','title','episode','dday'],
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