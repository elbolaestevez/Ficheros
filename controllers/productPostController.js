const Product = require('../models/product')
// const express=require('express');
// const firebase = require("../firebase")
// const multer = require('multer')

// const upload = multer({
//   storage: multer.memoryStorage()
// })

const createProduct = async (req, res) => {
  try {
    const { firebaseUrl } = req.file || ''
    req.body.image = firebaseUrl
    console.log(req.body)
    const product = await new Product(req.body)
    await product.save()
    // const blob = firebase.bucket.file(req.file.originalname)

    //let fileUpload = bucket.file(newFileName)

    //   const blobWriter = blob.createWriteStream({
    //     metadata: {
    //         contentType: req.file.mimetype
    //     }
    // })
    // blobStream.on('finish', async () => {
    //   await fileUpload.makePublic()
    //   req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${fileUpload.name}`

    // })

    // blobWriter.end(req.file.buffer)
    res
      .status(200)
      .render('formulario', { message: 'product created successfully' })
    // res.status(200).send({ message: 'product created successfully' })
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

module.exports = {
  createProduct,
}
