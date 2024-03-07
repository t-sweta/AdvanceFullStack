-- AlterTable
ALTER TABLE "Tweet" ADD COLUMN     "retweetcount" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Retweet" (
    "id" SERIAL NOT NULL,
    "tweetid" INTEGER NOT NULL,
    "retweetby" INTEGER NOT NULL,

    CONSTRAINT "Retweet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Retweet" ADD CONSTRAINT "Retweet_retweetby_fkey" FOREIGN KEY ("retweetby") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Retweet" ADD CONSTRAINT "Retweet_tweetid_fkey" FOREIGN KEY ("tweetid") REFERENCES "Tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
