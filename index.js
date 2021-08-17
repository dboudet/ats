const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

const { getAllApplicants } = require("./src/applicants")

// app.get("/ats/applicants/:applicantId", getSingleApplicant)
app.get("/ats/applicants", getAllApplicants)
// app.post("/ats/new-applicant", createApplicant)
// app.patch("/ats/applicants/:applicantId", updateApplicant)

// app.get("/ats/user/:userId", getUserById)
// app.post("/ats/new-user", createUser)
// app.patch("/ats/user/:userId", updateUser)

app.listen(3066, () => {
  console.log("Listening on port 3066 ...")
})
