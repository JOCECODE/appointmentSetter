// Import the PrismaClient constructor from the @prisma/client node module
import { PrismaClient } from '@prisma/client'
import { json } from 'stream/consumers';

// Instantiate PrismaClient
const prisma = new PrismaClient()

// Define an async function named main to send queries to the database
export default async function main() {
  // ... you will write your Prisma Client queries here
  // examples of queries that are working
  // download insomnia for windows it is api endpoint tester
  // tester.tsx is not set up correctly there is no default export 
  // console.log will be in your terminal


    // query that creates a new employee
    // await prisma.employee.create({
    //   data: {
    //     first_name: "Sinbad",
    //     last_name: "Morpheus Jones",
    //     role_id: 1,
    //   }
    // })  

      // query returns all employee from the employee table
  const allEmployees = await prisma.customers.findMany()
  console.dir(allEmployees, {depth: null});
  return allEmployees;

}

// Call the main function
main()
  .then(async () => {

    //Close the database connections when the script terminates
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)

        //Close the database connections when the script terminates
    await prisma.$disconnect()
    process.exit(1)
  })
  