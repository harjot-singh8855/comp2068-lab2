'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    
    req.query.method;
    req.query.x, req.query.y;
    //comparing method value and outputting
    if (req.query.method == 'add') {
        console.log(req.query.x, '+', req.query.y, '=', parseInt(req.query.x) + parseInt(req.query.y));
    }
    // comparing subtract and displaying result
    else if (req.query.method == 'subtract') {
        console.log(req.query.x, '-', req.query.y, '=', req.query.x - req.query.y);
    }
        // comparing subtract and displaying result
    else if (req.query.method == 'multiply') {
        console.log(req.query.x, '*', req.query.y, '=', req.query.x * req.query.y);
    }
        // comparing divide and display result
    else if (req.query.method == 'divide') {
        console.log(req.query.x, '/', req.query.y, '=', req.query.x / req.query.y);
    }
    else {
        console.log('please enter valid method')
    }


    res.render('index', { title: 'Express' });
});

module.exports = router;
