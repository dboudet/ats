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
  getApplicantSearchQuery,
} = require("./src/applicants")

app.patch("/ats/applicants/update/:applicantId", updateApplicant)

app.post("/ats/new-applicant", addNewApplicant)

app.get("/ats/search/:searchQuery", getApplicantSearchQuery)
app.get("/ats/applicants/:applicantId", getApplicantById)
app.get("/ats/applicants", getAllApplicants)

// app.get("/ats/login", userLogin)
// app.post("/ats/add-user", addUser)
// app.patch("/ats/update-profile", updateUser)

app.listen(3306, () => {
  console.log("Listening on port 3306 ...")
})
