import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const adminData: Prisma.adminsCreateInput[] = [
    {
        admin_username: "Alyssa Valadez",
        pass_word: "password",
        is_deleted: false

    }
]

const customerData: Prisma.customersCreateInput[] = [
    {
        first_name: "Sinbad",
        last_name: "Morpheus",
        phone_number: 5555555,
        address: "1016 Wallaby Way Sydney",
        email_address: "caboose@hotmail.com",
        pass_word: "password",
        appointment_timer: 5,
        is_deleted: false,
        appointments: {
            create: [
                {
                    formulas: "Paul Mitchell Tease Your Hair; Plan B; Hair Dye",
                    haircut: "Pixie Cut 70's Style",
                    products_used: "2 Bottles; 1 Box; 2 Hair Dye Box",
                    reciept: "$59.99 + Tax",
                    is_deleted: false
                }
            ]
        }
    }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of adminData) {
    const admin = await prisma.admins.create({
      data: u,
    })
    console.log(`Created admin with id: ${admin.id}`)
  }
   for (const u of customerData) {
    const customer = await prisma.customers.create({
      data: u,
    })
    console.log(`Created customer with id: ${customer.id}`)
  }
  console.log(`Seeding finished. And The Caboose is strong!`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })