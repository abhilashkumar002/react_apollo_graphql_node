const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/schema');

const app = express();

app.use(cors())

mongoose.connect('mongodb+srv://abhi:abhi1234@cluster0-qqz6h.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to database');
})
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4444, () => {
  console.log("Listening on port 4444");
})