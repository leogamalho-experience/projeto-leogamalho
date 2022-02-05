const express = require('express')

const app = express();

const path = require('path');
const router = express.Router();



router.get('/',function(req,res){
    res.SendFile(path.join(__dirname+'/index.html'));

})

app.use('/', router);