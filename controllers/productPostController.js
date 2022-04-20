const Product = require("../models/product");
const express=require('express');
const firebaseAdmin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');
const serviceAccount = require('../json/prueba-web-3b003-firebase-adminsdk-v943d-27466bece5.json');
const admin = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
})
const storageRef = admin.storage().bucket(`gs://prueba-web-3b003.appspot.com`);



const createProduct = async (req, res) => {
 
    try {
     
      const product = await new Product(req.body)
      await product.save();
      
      res.status(200).send({ message: "product created successfully" });
      
    } catch (err) {
      res.status(400).json({ error: err });
    }
  };

 const uploadphoto= async (req, res) =>  {
  const file = req.body.file
  console.log(file);
  return storageRef.upload(file, {
      public: true,
      destination: `/uploads/hashnode/${filename}`,
      metadata: {
          firebaseStorageDownloadTokens: uuidv4(),
      }
  });
}

 


  module.exports = {
    createProduct,
    uploadphoto
    
  };