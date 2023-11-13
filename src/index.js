const express =  require('express')
const app = express()
const morgan = require('morgan')
const path = require('path');
//setting

app.set('port', 3000 || process.env.PORT)

app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile) 
app.set('views',path.join(__dirname ,'views'))




//middleware
app.use(morgan('dev'))



//routes
app.use(require('./routes/index'))


//static file 
app.use(express.static(path.join(__dirname, 'public')))







//lsiten the server
app.listen(app.get('port'), ()=>{
    console.log('server on port ' ,app.get('port') )
})