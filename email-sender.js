/** @format */

// Import nodemailer module for sending emails
// Install it first with: npm install nodemailer
const nodemailer = require("nodemailer");

// Function to send an email
// This function creates a transporter and sends an email with the provided details
async function sendEmail(recipientEmail, subject, message) {
	try {
		// Create a transporter object using Gmail SMTP service
		// IMPORTANT: For Gmail, you may need to use an "App Password" instead of your regular password
		// See: https://support.google.com/accounts/answer/185833
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "oluwsp@gmail.com", 
				pass: "appPassword", // Replace with an app  password
			},
		});

		// Configure the email options
		const mailOptions = {
			from: "oluwsp@gmail.com", // Sender's email address
			to: recipientEmail, // Recipient's email address
			subject: subject, // Email subject
			text: message, // Email body (plain text)
		};

		// Send the email
		const info = await transporter.sendMail(mailOptions);
		console.log("Email sent successfully!");
		console.log("Response:", info.response);
		return true;
	} catch (error) {
		console.error("Error sending email:", error.message);
		return false;
	}
}

// Example: to Send a test email

/*
sendEmail(
  "recipient@example.com",
  "Test Subject",
  "Hello! This is a test email from Node.js"
);
*/

// we can also export the function for use in other files
// module.exports = { sendEmail };
