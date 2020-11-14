const express=require('express')
const { REACT_SVT_ALBUM }=require('../models')
const Sequelize=require('sequelize')
const router=express.Router()

router.get('/',async(req,res,next)=>{
    try{
        const albums=await REACT_SVT_ALBUM.findAll({
            order:['id'],
            attributes:['id','title','when','img','part','link']
        })
        res.status(200).json(albums)
    }catch(err){
        console.error(err)
        next(err)
    }
})

module.exports = router;