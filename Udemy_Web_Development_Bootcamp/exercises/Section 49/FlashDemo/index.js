const express = require('express');
const app = express();
const path = require('path');
const mongoose = require ('mongoose');
const methodOverride = require('method-override');

const sessions = require('express-session')

const flash = require('connect-flash')

const Product = require('./models/product');
const Farm =  require('./models/farm');


mongoose.connect('mongodb://localhost:27017/farmStandTake2', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!");
    })
    .catch(err => {
        console.log("MONGO RROR!");
        console.log(err);
    })

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


const sessionoptions ={secret:'thisisnotagoodone',resave:false,saveUninitialized:false}
app.use(sessions( sessionoptions))
app.use(flash());

//FARM ROUTES

app.use((req,res,next)=>{
    res.locals.messages=req.flash('success')
    next()
})





app.get('/farms', async (req, res) =>{
    const farms = await Farm.find({});
    
    
    res.render('farms/index', { farms});
})

app.get('/farms/new', (req, res) => {

    res.render('farms/new')
})

app.get('/farms/:id', async(req,res) => {
    const farm = await Farm.findById(req.params.id).populate ('products');
    res.render('farms/show', {farm})
})


app.delete('/farms/:id', async(req, res) => {
    console.log("DELETING")
    const {id} = req.params
    const farm = await Farm.findByIdAndDelete(id);
    res.redirect('/farms')
}
)

app.post('/farms', async (req, res)=>{
    
    
    const farm = new Farm(req.body);
    //in the real world, you def want to validate the data
    await farm.save();
    //also you want to include some error handling!

    



    

    req.flash('success','Successfully Made A New Farm')
    res.redirect('/farms')
})


app.get('/farms/:id/products/new', async (req, res) => {
    const {id} = req.params;
    const farm= await Farm.findById(id)
    res.render('products/new', {farm,  id, categories})
})

app.post('/farms/:id/products',async (req,res)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id);
    const {name, price, category } = req.body;
    const product = new Product({name, price, category});
    


    farm.products.push(product)

    product.farm = farm;

    await farm.save()
    await product.save()

    res.redirect (`/farms/${id}`)
    
})



//PRODUCT ROUTES
const categories = ['fruit', 'vegetable', 'dairy'];


app.get('/products', async (req, res) => {
    const {category} = req.query;
    if (category){
        const products = await Product.find({category});
        res.render('products/index', {products, category});
    }
    else {
        const products = await Product.find({});
        res.render('products/index', {products, category: 'All'});
    }
    
})

app.get('/products/new', (req, res) => {
    res.render('products/new', {categories});
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id).populate('farm');
    console.log(product);
    res.render('products/show',{product});
})

app.get('/products/:id/edit', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/edit',{product,categories});
})

app.put('/products/:id', async(req, res) => {
    
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    res.redirect(`/products/${product._id}`);
    // console.log(req.body);
    // res.send('PUT!!');
    
})

app.delete('/products/:id'  ,  async (req, res) => {
    const {id} = req.params;
    const deletedProduct =  await Product.findByIdAndDelete(id);

    res.redirect('/products');

})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})