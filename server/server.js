const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { isTSMethodSignature } = require('@babel/types');
const PORT = process.env.PORT || 5003;
const cartRouter = require('./routes/items.router.js')
/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`
app.use('/cart', cartRouter);
/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});