"use strict";

fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(`error ${err}`)
  });