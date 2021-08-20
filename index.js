const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

const {
  getAllApplicants,
  getApplicantById,
  addNewApplicant,
  updateApplicant,
} = require("./src/applicants")

app.get("/ats/applicants/:applicantId", getApplicantById)
app.get("/ats/applicants", getAllApplicants)
app.post("/ats/new-applicant", addNewApplicant)
app.patch("/ats/applicants/update/:applicantId", updateApplicant)

// app.get("/ats/user/:userId", getUserById)
// app.post("/ats/new-user", createUser)
// app.patch("/ats/user/:userId", updateUser)

app.listen(3306, () => {
  console.log("Listening on port 3306 ...")
})
