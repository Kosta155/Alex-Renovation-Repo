// api/sendemail.js
console.log("I am here");
console.log(process.env.MAILJET_API_KEY);
const mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);

module.exports = async (req, res) => {
  const { from, to, subject, text } = req.body;
  try {
    console.log("I am here");
    const request = mailjet.post('send', { version: 'v3.0' }).request({
      "FromEmail":"kostikanini2004@gmail.com",
      "FromName":"Your Mailjet Pilot",
      "Recipients":[
        {
          "Email":"kostikanini2004@gmail.com",
          "Name":"Passenger 1"
        }
      ],
      "Subject":"Your email flight plan!",
      "Text-part":"Dear passenger, welcome to Mailjet! May the delivery force be with you!",
      "Html-part":"<h3>Dear passenger, welcome to Mailjet!</h3><br />May the delivery force be with you!"
    })
	.then((result) => {
		console.log(result.body)
	});
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error(err.statusCode);
    res.status(500).json({ message: 'Failed to send email', error: err.message });
  }
};
