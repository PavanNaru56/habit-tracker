//express is imported
const express = require('express');
//express starts
const app = express();
//port number
const port = 8000;
//expressLayouts are used to create the layout and makes easier for creating different post or content in same design
const expressLayouts = require('express-ejs-layouts');
//body parser is used to get extarct the data 
const bodyParser = require('body-parser');
//checks whether mongodb running or not
const db = require('./config/mongoose');

const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
    src : './assets/scss',
    dest : './assets/css',
    debug : true,
    outputStyle : 'extended',
    prefix : '/css'
}));
//statics for creating the css files or javascript files
app.use(express.static('./assets'))
app.use(expressLayouts);




app.use(bodyParser.urlencoded({extended:false}));

app.set('layout extractStyles', true);
app.set('layout extractScripts',true);
//setting up the views 
app.set('view engine','ejs');
app.set('views','./views');



app.use('/',require('./routes'));
//port running
app.listen(port,(err)=>{
    if(err){
        console.log("error in port")
    }
    console.log("port success");
})