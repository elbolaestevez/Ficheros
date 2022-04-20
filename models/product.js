
const mongoose = require("../utils/mongo");
const Schema = mongoose.Schema;

const ProductInfo = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  
  price: {
    type: Number,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  image:{
    type: String,
    validate: {
        validator: function(url){
            return url.indexOf('.jpg') != -1;
        }, 
        message: "Por favor, sólo imágenes JPG"
    }
},
  
});
module.exports = mongoose.model("Product", ProductInfo);