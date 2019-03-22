const express = require('express');
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');


exports.allInfo = () => {
  return fetch('http://soccer.sportsopendata.net/v1/leagues/eredivisie/seasons/18-19/standings')
  .then(res => {
    return res.json()
  })
  .then(res => {
    return res;
  })
}
