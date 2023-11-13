const express =  require('express')
const router = express.Router()


router.get('/', (req, res)=>{
    res.render('index.html',{title:'my first app'})
})

router.get('/contact', (req, res)=>{
    res.render('contact.html',{title:'contact Page'})
})

router.get('/about', (req, res)=>{
    res.render('about.html')
})







module.exports= router;