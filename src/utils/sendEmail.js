
const nodemailer = require('nodemailer');

// Create a transporter using your email service (e.g., Gmail)
let transporter = nodemailer.createTransport({
  service: 'gmail',  // You can also use other services like Outlook, Yahoo, etc.
  auth: {
    user: 'shtepuvlad@gmail.com',  // Replace with your email
    pass: '123456Aa.'    // Replace with your email password (consider using app-specific passwords for security)
  }
});

// Set up email data
let mailOptions = {
  from: 'shtepuvlad@gmail.com',  // Sender address
  to: 'vladsteppu@gmail.com',  // List of recipients
  subject: 'Test Email from Nodemailer',  // Subject line
  text: 'Hello, this is a test email sent using Nodemailer!',  // Plain text body
  html: '<p>Hello, this is a <strong>test email</strong> sent using Nodemailer!</p>'  // HTML body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error: ', error);
  }
  console.log('Email sent: ' + info.response);
});

