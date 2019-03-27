const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./assets/db/score.json')
const db = low(adapter)

exports.saveData = (obj) => {
  db.set('data', obj)
  .value()
  db.write()
}
exports.getData = () => {
  return db.get('data')
  .value()
}
