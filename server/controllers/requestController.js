const nodemailer = require('nodemailer');

// Create a transporter object with your email service provider configuration
const transporter = nodemailer.createTransport({
  service: 'smtp',
  auth: {
    user: 'kudzaimunyama69@gmail.com',
    pass: 'tatendah'
  }
});

// Create a function for sending an email
const sendEmail = async (req, res) => {
  try {
    const { from, subject, message } = req.body;

    // Send the email
    await transporter.sendMail({
      from: from, // Sender's email address
      to: "kudzaimunyama69@gmail.com", // Recipient's email address
      subject: subject, // Email subject
      text: message // Email body (plain text)
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

module.exports = { sendEmail };