const sgMail = require('@sendgrid/mail');

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const {
    name,
    email,
    phone,
    enquiry,
  } = req.body;

  const message = `
    Name: ${name}
    Phone: ${phone}
    Enquiry: ${enquiry}
  `;

  const content = {
    to: 'spotwellbeing@gmail.com',
    from: email,
    subject: 'Website enquiry',
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
