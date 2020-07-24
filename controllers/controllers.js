const User = require("../model/User");

exports.getUser = (req, res, next) => {
  User.find()
    .then((user) => {
      console.log("fetched " + user.length + " users from DB");
    })
    .catch((err) => {
      console.log(err);
    });
  res.json({
    message: "Fetching from data works finely",
  });
};

exports.addUser = (req, res, next) => {
  console.log(req.body);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phoneNo: +req.body.phoneNo,
    subject: req.body.subject,
    qualification: req.body.qualification,
    experience: +req.body.experience,
  });

  user
    .save()
    .then((result) => {
      console.log("user added");
      res.status(200).json({
        message: "Registration Successfull",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
