require("dotenv").config();
const router = require("express").Router();
const User = require("../models").User;
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    User.findAll().then(users => {
        console.log(req.body);
        res.json(users);
    });
});

router.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    User.findOne({
        where: { email: email }
    }).then(user => {
        if (user) {
            return res.status(400).json("Email Address Already Exists.");
        }
        User.create({
            name: name,
            email: email,
            password: password
        })
            .then(user => res.json(user))
            .catch(err => res.status(500).json(err));
    });
});

router.post("/login", (req, res) => {
    passport.authenticate("local", { session: false }, (err, user) => {
        if (err || !user) return res.status(401).send({ err });

        const filteredUser = {
            id: user.id,
            name: user.name,
            email: user.email
        };

        jwt.sign(filteredUser, process.env.JWT_SECRET, { expiresIn: 900 }, (err, jwt) => {
            if (err) res.status(500).json({ error: "Error signing token.", raw: err });
            res.cookie("jwt", jwt, { expires: new Date(Date.now() + 900000), httpOnly: true });
            res.status(200).send(filteredUser);
        });
    })(req, res);
});

module.exports = router;
