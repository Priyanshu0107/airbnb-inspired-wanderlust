const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");
const path=require("path");

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

app.get("/",(req,res)=>{
    res.send("the full work ");
});

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
app.get("/listings/:id", async(req,res)=>{
let {id}=req.params;
  const listing= await Listing.findById(id);
  res.render("listings/show",{listing})
})
app.listen(9002,()=>{
    console.log("the port is lsiten ");
})