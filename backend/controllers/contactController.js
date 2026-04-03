const { emailApi } = require("../config/mailer");

const sendContactMail = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const emailData = {
      sender: {
        email: process.env.SENDER_EMAIL,
        name: "HK Vidya Website",
      },
      to: [{ email: process.env.RECEIVER_EMAIL }],
      replyTo: {
        email: email,
        name: name,
      },
      subject: subject || "New Contact Message",
      htmlContent: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    await emailApi.sendTransacEmail(emailData);

    res.status(200).json({ message: "Email sent successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
};

module.exports = { sendContactMail };