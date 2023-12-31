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
    const { fullname, email, subject, message } = req.body;

    // Send the email
    await transporter.sendMail({
      from: "support@binary-apps.com", // Sender's email address
      to: email, // Recipient's email address
      subject: subject, // Email subject
      text: `${fullname} your request for\n  Subject:\t ${subject},\n\n Message:\t ${message}\n was sent successfully. Our team will contact you soon.\n Thank you for trusting in our services.` // Email body (plain text)
    });

    res.status(200).json({ msg: 'Email sent successfully' });
    console.log("sent");

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

module.exports = { sendEmail };