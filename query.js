const db = require('./db')
const Publisher = require('./models/publisher')
const Book = require('./models/book')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//CRUD actions

//Find a book
const findBook = async () => {
  const thePowerOfNow = await Book.find({ title: 'The Power of Now' })
  console.log(thePowerOfNow)
}

//Creates a book
const createBook = async () => {
  const newBook = await Book.create({ title: 'Just As I Am: A Memoir', author: 'Cicely Tyson', published_date: '2021', publisher_id: harperCollins[1]._id })
  console.log(newBook)
}
    
//Updates a book
const updatesBook = async () => {
  const updatedTheAlchemist = await Book.updateOne({ title: 'The Alchemist' }, { $set: { title: "The Alchemist Revised "} })
  console.log(updatedTheAlchemist)
}

//Deletes a book
const deletesBook = async () => {
  const deletededZen = await Book.deleteOne({ title: 'Zen and the Art of Motorcycle Maintenance' })
  console.log(deletededZen)
}

const run = async () => {
  await findBook()
  await createBook()
  await updatesBook()
  await deletesBook()
}

run()

// run mongo on seed first
// node query.js