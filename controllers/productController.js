const Product = require('../models/product')
const express = require('express')

const start = async (req, res) => {
  res.status(200).render('formulario') // Pinta datos en el pug
}
const search = async (req, res) => {
  res.status(200).render('searchproduct') // Pinta datos en el pug
}

const getProduct = async (req, res) => {
  const idname = req.body.name
  // const realname=idname+""
  console.log('santireq', idname)
  try {
    const products = await Product.find({ name: idname })
      .select('name price description image')
      .exec()
    //  console.log("santiproducto",products);
    console.log(products)
    res.status(200).render('listproduct', { products })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

module.exports = {
  start,
  getProduct,
  search,
}
