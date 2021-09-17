import nodemailer from "nodemailer";

export default async (req, res) => {
  // Check to make sure method is post
  if (req.method === "POST") {
    // Destruct the body information
    const { name, email, message, subject, phone } = req.body;

    // Build transporter for nodemailer (Boilerplate)
    const transporter = nodemailer.createTransport({
      // For gmail only
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      // Env variables
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });

    // Try-Catch for attempt to send email
    try {
      const emailRes = await transporter.sendMail({
        from: email,
        to: "crystalsummerlin5@icloud.com",
        subject: `${subject}`,
        html: `<p>New Form Submission from your site</p>
        <p><strong>Name: </strong> ${name} </p>
        <p><strong>Phone: </strong> ${phone} </p>
        <p><strong>Email: </strong> ${email} </p>
        <p><strong>Message: </strong> ${message} </p>
  
        `,
      });

      // Confirm email sent
      console.log("New Message Sent");
    } catch (err) {
      // Log error if message cannot send
      console.log(err);
    }

    // Status
    res.status(200).json(req.body);
  } else {
    // Only allow post methods
    res.setHeader("Allow", ["POST"]);

    // Status
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
