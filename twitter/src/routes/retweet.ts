import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../utils/auth";
const prisma = new PrismaClient();
const router = express.Router();
router.post("/:tweetid",verifyToken,async(req,res)=>{
  const {tweetid} = req.params;
  const retweetby = req.user.id;
  let alreadyRetweet = await prisma.retweet.findFirst({
    where:{
      tweetid:Number(tweetid),
      retweetby
    }
  })
  if(alreadyRetweet!=null){
    res.send({alreadyRetweet,already:true})
  }
  await prisma.retweet.create({
    data:{
      tweetid:Number(tweetid),
      retweetby
    }
  })
  await prisma.tweet.update({
    where:{
      id:Number(tweetid)
    },
    data:{
      retweetcount:{increment:1}
    }
  })
  res.send("retweet succesful")
})
//undo ka code below
router.delete("./tweetid",verifyToken,(req,res)=>{
  const {id} = req.params;
  const tweetid = await prisma.retweet.findUnique({
    where:{
      id:Number(id)
    },
    select:{
      tweetid:true
    }
  })
  await prisma.retweet.delete({
    where:{
      
    }
  })
})

export default router