const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Setup a GET route to get all the creatures from the database
router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM cart ORDER BY name asc;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

//POST
router.post('/', (req, res) => {
    const item = req.body;
    const sqlText = `INSERT INTO cart (name, quantity, unit)
                     VALUES ($1, $2, $3)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool.query(sqlText, [item.name, item.quantity, item.unit])
        .then((result) => {
            console.log(`Added creature to the database`, item);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

router.delete('/:id', (req,res)=>{
    const sqlText = `delete from "cart" where "id" = $1`
    pool.query(sqlText, [req.params.id]).then((results)=>{
        res.sendStatus(200)
    }).catch((error)=>{
        console.log(`Error in Delete request ${error}`)
        res.sendStatus(500)
    })
})

module.exports = router