const twilio = require('twilio');
const sendEmail = require('./emailService');

const accountSid = 'your_twilio_account_sid';
const authToken = 'your_twilio_auth_token';
const twilioClient = twilio(accountSid, authToken);

const sendAlert = (message, email, phoneNumber) => {
  // Send SMS
  twilioClient.messages.create({
    body: message,
    from: '+1234567890',
    to: phoneNumber,
  });

  // Send Email
  sendEmail(email, 'Website Alert', message);
};

module.exports = sendAlert;
