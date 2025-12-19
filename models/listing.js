const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:
    {
        type:String,
        required:true,
          default: "Untitled Listing"

    },
    description:String,
    image:{

        type:String,
        default:"https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
        set:(v)=> v === ""?"https://images.unsplash.com/photo-1525182008055-f88b95ff7980":v,
    },
    price:Number,
    location:String,
    country:String,
})

const Listing=mongoose.model("Listing",listingSchema); 

module.exports = Listing;
