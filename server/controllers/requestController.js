const nodemailer = require('nodemailer');

// Create a transporter object with your email service provider configuration
const transporter = nodemailer.createTransport({
  host: 'binary-apps.com',
  port: "465",
  secure: true,
  auth: {
    user: 'support@binary-apps.com',
    pass: 'hW0XRM1i1y7(+e'
  }
});

// Create a function for sending an email
const sendEmail = async (req, res) => {
  try {
    const { from, subject, text } = req.body;

    // Send the email
    await transporter.sendMail({
      from: from, // Sender's email address
      to: "kudzaimunyama69@gmail.com", // Recipient's email address
      subject: subject, // Email subject
      text: text // Email body (plain text)
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

module.exports = { sendEmail };