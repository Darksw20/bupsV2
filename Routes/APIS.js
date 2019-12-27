'use strict';
const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send("Hello Word APIS")
})

module.exports = router