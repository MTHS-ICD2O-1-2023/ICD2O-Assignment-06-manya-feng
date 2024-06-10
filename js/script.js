// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: June 2024
// This file contains the JS functions for index.html

"use strict"

const getRandomCatImage = async () => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search")
    const data = await response.json()
    const catImageUrl = data[0].url

    console.log(catImageUrl)

    // Display the image on the webpage
    const catImageElement = document.createElement("img")  // Changed the variable name to catImageElement
    catImageElement.src = catImageUrl
    catImageElement.alt = "Cat image"
    document.body.appendChild(catImageElement)
  } catch (error) {
    console.log(error)
  }
}

getRandomCatImage()