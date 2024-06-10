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
  const dogImageUrl = data.message
  console.log(dogImageUrl)

  // Display the image on the webpage
  const dogImageElement = document.createElement("img")
  dogImageElement.src = dogImageUrl
  dogImageElement.alt = "Cat image"
  document.body.appendChild(catImageElement)
  } catch (error) {
  console.log(error)
    }
  }

  getRandomDogImage()