// var nodemailer = require("nodemailer");

// var app = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "emailnotificationtesting12@gmail.com",
//     pass: "upkxxzwmscnpxakt"
//   }
// });

// var mailOptions = {
//   from: "emailnotificationtesting12@gmail.com",
//   to: "emailnotificationtesting12@gmail.com",
//   subject: "Email Notification",
//   text: "Just a sample email!"
// };

// app.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent");
//   }
// });

const path = require("path");
const express = require("express");

const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
app.use(cors());
const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/updated", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "emailnotificationtesting12@gmail.com",
      pass: "upkxxzwmscnpxakt",
    },
  });

  var mailOptions = {
    from: "emailnotificationtesting12@gmail.com", // sender address
    to: "umasai531@gmail.com,emailnotificationtesting12@gmail.com", // list of receivers
    subject: "Updated", // Subject line
    // text: "Updated",
    html: `
        <div style="padding:10px;border-style: ridge">
        <h1>Address updated</h1>
       </div>
        `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent Successfully");
    }
  });
});

app.post("/added", (req, res) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "emailnotificationtesting12@gmail.com",
        pass: "upkxxzwmscnpxakt",
      },
    });
  
    var mailOptions = {
      from: "emailnotificationtesting12@gmail.com", // sender address
      to: "umasai531@gmail.com,emailnotificationtesting12@gmail.com", // list of receivers
      subject: "Added", // Subject line
      // text: "Updated",
      html: `
          <div style="padding:10px;border-style: ridge">
          <h1>Address added</h1>
         </div>
          `,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email Sent Successfully");
      }
    });
  });
// listen to the port
app.listen(5000, () => {
  console.log("server start on port 3030");
});
