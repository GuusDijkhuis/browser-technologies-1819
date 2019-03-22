const express = require('express')
const getData = require('./getData.js')
const fs = require('fs')


exports.homepage = async (req, res, next) => {
  const allInfo = await getData.allInfo()

  fs.writeFile('./db/footbal-info.json', allInfo);
  console.log(allInfo);
}
