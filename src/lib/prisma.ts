import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient;
}

const prisma = global.prisma || new PrismaClient();

if(process.env.NODE_ENV !=='production'){
    global.prisma = new PrismaClient()
}

export default prisma;