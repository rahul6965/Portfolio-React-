const express = require("express");
const Contact = require("../models/Contact");
const { sendMail } = require("../helpers/sendMail");
const router = express.Router();

// Create contact + Send Email
router.post("/", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    // Send email to admin
    await sendMail(
      process.env.SMTP_USER, 
      "New Contact Form Submission",
      `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${req.body.name}</p>
      <p><strong>Email:</strong> ${req.body.email}</p>
      <p><strong>Message:</strong> ${req.body.message}</p>
      `
    );

    res.status(201).json({
      success: true,
      message: "Message received and email sent!",
      data: contact,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
