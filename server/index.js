require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this or use SMTP
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Enquiry Route
app.post('/api/enquiry', async (req, res) => {
    const { product, name, email, phone, details } = req.body;

    if (!name || !phone) {
        return res.status(400).json({ success: false, message: 'Name and Phone are required' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: `New Enquiry from ${name} - ${product || 'General'}`,
        text: `
You have a new enquiry from the GEO Motor India website:

Product of Interest: ${product || 'General / OEM / Dealership'}
Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}

Message/Details:
${details || 'No message provided.'}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Enquiry submitted successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send enquiry. Please try again or call us directly.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
