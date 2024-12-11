const express = require('express')
const { User } = require('../database')
const { sign } = require('jsonwebtoken')
const zod = require ('zod')
const router= express.Router()
const jwt= require('jsonwebtoken')
const {JWT_SECRET} =require('../config')
const signupSchema= zod.object({
    username: zod.string(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string()
})
const signinSchema= zod.object({
    username: zod.string(),
    password: zod.string()
})
router.post('/signup', async (req,res)=>{
    const body= req.body;
    const {success}= signupSchema.safeParse(req.body)
    if (!success){
        res.json({
            message: "invalid credentails / user already exists"
        })
    }
    const user= await User.findOne({
        username: body.username
    })
    if (user._id){
        res.json({
            message: "invalid credentails / user already exists"
        })
    }
    const dbUser=await User.create(body)
    const token= jwt.sign({
        userID: dbUser._id
    },JWT_SECRET)
    res.json({
        message: " user created successfully",
        token: token
    })
} )
router.post('/signin', async (req,res)=>{
    const body= req.body;
    const {success} = signinSchema.safeParse(req.body)
    if (!success){
        res.status(411).json({
            message: " signin unsuccessfull"
        })
    }
    const dbUser= await User.findOne({
        username: body.username,
        password: body.password
    })
    if (!dbUser._id){
        res.status(411).json({
            message: " signin unsuccessfull"
        })
    }
    res.json({
        message: " signin successfull"
    })
})
router.get('/bulk',async (req,res)=>{
    const dbUsers=await User.find({
    })
    res.json({
        dbUsers
    })
})

 module.exports= router;