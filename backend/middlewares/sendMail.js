import { createTransport } from "nodemailer";

export const sendMail = async (text) => {
  const transporter = createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    auth: {
      user: process.env.SMPT_USER,
      pass: process.env.SMPT_PASSWORD,
    },

    // host: "sandbox.smtp.mailtrap.io",
    // port: 2525,
    // auth: {
    //   user: "55c65b1d5f4f2b",
    //   pass: "9813d806a4e69c"
    // }
  

  });

  await transporter.sendMail({
    subject: "CONTACT REQUEST FROM PORTFOLIO",
    to: process.env.MYMAIL,
    from: process.env.MYMAIL,
    text,
  });
};