const db = require('./db')
const Publisher = require('./models/publisher')
const Book = require('./models/book')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//CRUD actions

//Find a book
const findBook = async () => {
  const findThePowerOfNow = await Book.find( { title:'The Power of Now'} )
  console.log('Find Book:', findThePowerOfNow)
}

//Find all books
const findAllBooks = async () => {
  const allBooks = await Book.find({})
  console.log('All Books:', allBooks)
}

//Create publisher
const createPublisher = async () => {
  const eccoPress = await Publisher.insertMany({
    name: "Ecco",
    location: "New York",
    url: "https://www.harpercollins.com/pages/ecco",
  });
  console.log("New publisher:", eccoPress)
}


//Creates a book
const createBook = async () => {
  const ecco =  await Publisher.find({ name: "Ecco"})
  const justKids = await Book.insertMany({ title: 'Just Kids', author: 'Patti Smith', published_date: '2010', publisher_id: ecco[0]._id })
  console.log('New Book:', justKids)
}
    
//Updates a book
const updatesBook = async () => {
  const updatedTheAlchemist = await Book.updateOne({ title: 'The Alchemist' }, { $set: { title: "The Alchemist Revised "} })
  console.log('Updated Book to Revised Version:', updatedTheAlchemist)
}

//Deletes a book
const deletesBook = async () => {
  const deletededZen = await Book.deleteOne({ title: 'Zen and the Art of Motorcycle Maintenance' })
  console.log('Deleted Book:', deletededZen)
}

const run = async () => {
  await findBook()
  await findAllBooks()
  await createPublisher()
  await createBook()
  await updatesBook()
  await deletesBook()
}

run()

// run mongo on seed first
// node query.js