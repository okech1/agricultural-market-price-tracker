// utils/notification.js
const sgMail = require('@sendgrid/mail');
const twilio = require('twilio');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendEmailNotification = async (to, message) => {
  const msg = {
    to,
    from: 'your-email@example.com',
    subject: 'Price Alert Notification',
    text: message
  };
  await sgMail.send(msg);
};

const sendSmsNotification = async (to, message) => {
  await twilioClient.messages.create({
    body: message,
    from: 'your_twilio_number',
    to
  });
};

module.exports = { sendEmailNotification, sendSmsNotification };
