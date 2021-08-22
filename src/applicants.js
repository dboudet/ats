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
    `INSERT INTO applicants(first_name,last_name,email,position,photo_url,resume_url,notes) VALUES(?,?,?,?,?,?,?);`,
    [
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.position,
      formData.photoUrl,
      formData.resumeUrl,
      formData.notes,
    ],
    (err, rows) => {
      if (err) {
        console.log(err)
        res.status(500).send(err)
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
      first_name = ?, 
      last_name = ?, 
      photo_url = ?, 
      email = ?, 
      position = ?, 
      notes = ?,
      score = ${formData.score},
      application_stage = ${formData.applicationStage}
    WHERE id = ${formData.id};`,
    [
      formData.firstName,
      formData.lastName,
      formData.photoUrl,
      formData.email,
      formData.position,
      formData.notes,
    ],
    (err, rows) => {
      if (err) {
        console.log(err)
        res.status(500).send(err)
      }
      res.send({
        status: 201,
        success: true,
        message: "Applicant updated",
      })
    }
  )
  db.end()
}
