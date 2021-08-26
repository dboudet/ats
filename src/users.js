const mysql = require("mysql")
const { dbconfig } = require("../dbconfig")

exports.userLogin = (req, res) => {
  const db = mysql.createConnection(dbconfig)
  db.connect()
  const { applicantId } = req.params
  db.query(
    `SELECT * FROM applicants WHERE id = ${applicantId}`,
    (err, rows) => {
      if (err) {
        console.log(err)
        res.status(500).send(err)
        return
      }
      res.send(rows)
    }
  )
  db.end()
}
