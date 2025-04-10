var express=require('express')
var pool=require('./db')
const bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.json());




app.get('/menu',async(req , res)=>{
  try{
  var result=await pool.query('select * from contact')
  res.json({contact: result.rows})  
  }
  catch(err)
  {
    console.error(err.message);
    res.status(500).send('Server Eroor')
  }

})


app.get('/menubyid',async(req , res)=>{
  try{
    const {id}=req.body;
  var result=await pool.query('select * from contact where id=$1',[id])
  res.json({menu: result.rows})  
  }
  catch(err)
  {
    console.error(err.message);
    res.status(500).send('Server Eroor')
  }

})












app.get('/food',async(req , res)=>{

  var result=await pool.query('select * from food_cat')
  res.json({food: result.rows})  

})

app.get('/qty',async(req , res)=>{

  var result=await pool.query('select * from qty_mast')
  res.json({qty: result.rows})  

})





app.get('/',(req , res)=>{
  res.send('<h1>Menu card Api</h1>')
})






server=app;
server.listen('3008','127.0.0.1',()=>{
  console.log("Server started ...")
})