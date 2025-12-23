const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");
const path=require("path");
const methodOverride=require("method-override")
const ejsMate=require("ejs-mate")
const wrapAsync = require("./utlis/wrapAsync");

const ExpressError=require("./utlis/ExpressError.js")
mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
.then(()=>{
    console.log("mongo connected");
})
.catch((err)=>{
    console.error("mongio connection erroe ");
})

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))
app.engine("ejs",ejsMate)
app.use(express.static(path.join(__dirname,"public")))
app.get("/",(req,res)=>{
    res.send("the full work ");
});
app
// app.get("/testListing", async (req, res) => {
//     try {
//         let sampleListing = new Listing({
//             title: "My New Villa",
//             description: "By the beach",
//             price: 1230,
//             location: "Thana Bhawan",
//             country: "India",
//         });

//         await sampleListing.save();
//         console.log("Listing saved successfully");

//         res.send("Test listing created successfully");
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Error saving listing");
//     }
// });

app.get("/listings" ,async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});

})
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})
app.get("/listings/:id", async(req,res)=>{
let {id}=req.params;
  const listing= await Listing.findById(id);
  res.render("listings/show",{listing})
})

app.post(
  "/listings",
  wrapAsync(async (req, res) => {
    let { title, description, image, price, country, location } = req.body;

    const newListing = new Listing({
      title,
      description,
      image,
      price,
      country,
      location,
    });

    await newListing.save();

    res.redirect("/listings");
  })
);

app.get("/listings/:id/edit",async (req,res)=>{
    let {id}=req.params;
  const listing= await Listing.findById(id);
  res.render("listings/edit.ejs",{listing})
})
app.put("/listings/:id",async(req,res)=>{
     let {id}=req.params;
     await Listing.findByIdAndUpdate(id, req.body);
res.redirect(`/listings/${id}`)
});
app.post("/listings/:id", async(req,res)=>{
    let {id}=req.params;
    let del=await Listing.findByIdAndDelete(id);
    console.log(del);
    res.redirect("/listings");
})
// 404 handler (NO PATH)
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
let {statusCode,message}=err;
res.status(statusCode).send(message);
});

app.listen(9002,()=>{
    console.log("the port is lsiten ");
})  