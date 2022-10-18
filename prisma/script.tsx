import { PrismaClient } from '@prisma/client'

//this logs all the queries into the terminal
const prisma = new PrismaClient({ log: ["query"]})

async function main() {
    // Prisma Client Queries
 const user = await prisma.customers.create({
    data: {
        first_name: "Sinbad",
        last_name: "Morpheus",
        address: "2020 Lincoln Heights",
        email_address: "DynoBub",
        pass_word: "password",
        phone_number: 6969696969,
        appointment_timer: 2
    }
 })

}

main()
.catch(err => {
    console.error(err.message)
})
.finally(async () => {
    await prisma.$disconnect()
})