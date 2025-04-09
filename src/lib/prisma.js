// src/lib/prisma.js
 const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();


module.exports  = { prisma };



async function testDb() {
  const news = await prisma.news.findMany();
  console.log(news);
}

testDb()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
