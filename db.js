const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')

db.serialize(() => {
  db.run('CREATE TABLE lorem (info TEXT)')
  let query = db.prepare('INSERT INTO lorem VALUES (?)')

  for (let i = 0; i < 10; i++) {
    query.run('Ipsum ' + i)
  }

  query.finalize()

  db.each('SELECT rowid AS id, info FROM lorem', (error, row) => {
    console.log(row.id + ': ' + row.info)
  })
})

db.close()
