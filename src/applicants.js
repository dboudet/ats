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

exports.addNewApplicant = (req, res) => {
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

exports.updateApplicant = (req, res) => {
  const db = mysql.createConnection(dbconfig)
  db.connect()
  const formData = req.body
  console.log(formData)
  db.query(
    `UPDATE applicants 
    SET 
      first_name = "${formData.firstName}", 
      last_name = "${formData.lastName}", 
      photo_url = "${formData.photoUrl}", 
      email = "${formData.email}", 
      position = "${formData.position}", 
      notes = "${formData.notes}",
      rating_1 = "${formData.rating1}",
      rating_2 = "${formData.rating2}",
      rating_3 = "${formData.rating3}",
      rating_4 = "${formData.rating4}",
      rating_5 = "${formData.rating5}"
    WHERE id = "${formDatalid}";`,
    (err, rows) => {
      if (err) {
        console.log(err)
        res.status(500).send(err)
        return
      }
      res.send({
        status: 201,
        success: true,
        message: "Successfully updated applicant",
      })
    }
  )
  db.end()
}
