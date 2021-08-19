const mysql = require("mysql")
const { dbconfig } = require("../dbconfig")

exports.getAllApplicants = (req, res) => {
  const db = mysql.createConnection(dbconfig)
  db.connect()
  db.query(`SELECT * FROM applicants`, (err, rows) => {
    if (err) {
      res.status(500).send(err)
      return
    }
    res.send(rows)
  })
  db.end()
}

exports.getApplicantById = (req, res) => {
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

exports.AddNewApplicant = (req, res) => {
  const db = mysql.createConnection(dbconfig)
  db.connect()
  const formData = req.body
  console.log(formData)
  db.query(
    `INSERT INTO applicants(first_name,last_name,email,position,photo_url) VALUES ("${formData.firstName}","${formData.lastName}","${formData.email}","${formData.position}","${formData.photoUrl}");`,
    (err, rows) => {
      if (err) {
        console.log(err)
        res.status(500).send(err)
        return
      }
      res.send({
        status: 201,
        success: true,
        message: "Successfully created applicant!",
      })
    }
  )
  db.end()
}
