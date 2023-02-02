const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.REACT_APP_NODEMAILER_USER,
        pass: process.env.REACT_APP_NODEMAILER_PASS
    },
});

const sendContactForm = (form) => {
    return transport
        .sendMail({
            subject: "👾🤖Nuevo mensaje de tu formulario de contacto😎",
            to: process.env.REACT_APP_NODEMAILER_RECEIVER,
            html: `<h3>¡Tienes un nuevo mensaje!</h3>
			<p> Nombre: ${form.name} </p>
            <p> Nombre: ${form.phone} </p>
			<p> Correo: ${form.email} </p>
			<p>Mensaje: ${form.message} </p>
			`,
        })
        .then((r) => {
            console.log("Accepted => ", r.accepted)
            console.log("Rejected => ", r.rejected)
        })
        .catch((e) => console.log(e))
}

exports.contactForm = functions.https.onRequest((req, res) => {
    if (req.body.secret !== process.env.REACT_APP_NODEMAILER_SECRET) return res.send('Secret is not valid!');
    sendContactForm(req.body);
    res.send("Envviando email...");
});
