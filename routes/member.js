const express=require('express')
const router=express.Router()
const {REACT_SVT_MEMBER}=require('../models')

router.get('/',async(req,res,next)=>{
    try{
        const members=await REACT_SVT_MEMBER.findAll({
            limit:13,
            order:['id'],
            attributes:['id','name','birth','img','part']
        })
        res.status(200).json(members);
    }catch(err){
        console.error(err)
        next(err)
    }
})
router.get('/:member',async(req,res,next)=>{
    try{
        const memberId=Number(req.params.member)
        const member=await REACT_SVT_MEMBER.findOne({
            where:{id:memberId},
            attribute:['id','name','birth','part','img']
        })
        res.status(200).json(member);
    }catch(err){
        console.error(err)
        next(err)
    }
})
module.exports = router;