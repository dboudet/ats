const mysql = require("mysql")
const { dbconfig } = require("../dbconfig")

exports.getAllApplicants = (req, res) => {
  const db = mysql.createConnection(dbconfig)
  db.connect()
  db.query(`SELECT * FROM applicants`, (err, rows) => {
    if (err) {
      console.log(err)
      res.status(500).send(err)
      return
    }
    res.send(rows)
  })
  db.end()
}
