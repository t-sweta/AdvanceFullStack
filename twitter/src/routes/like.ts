import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../utils/auth";
const prisma = new PrismaClient();
const router = express.Router();
router.post("/:id", verifyToken, async (req, res) => {
  //verifytoekkn se userid nikeaalnege,id se tweet id aaega
  const { id } = req.params;
  const userid = req.user.id;
  //checking if users like exist previously or not
  let like = await prisma.like.findFirst({
    where: {
      tweetid: Number(id),
      userid: userid,
    },
  });
  if (like != null) {
    await prisma.like.delete({
      where: {
        id: like.id,
      },
    });
    await prisma.tweet.update({
      where: {
        id: Number(id),
      },
      data: {
        likecount: { decrement: 1 },
      },
    });
    return res.send("tweet disliked");
    //
  }
  await prisma.like.create({
    data: {
      tweetid: Number(id),
      userid: userid,
    },
  });
  await prisma.tweet.update({
    where: {
      id: Number(id),
    },
    data: {
      likecount: {
        increment: 1,
      },
    },
  });
});

//kis kis ne like kara hai

router.get("/:id",async(req,res)=>{
  const id = req.params.id;
})

export default router;
