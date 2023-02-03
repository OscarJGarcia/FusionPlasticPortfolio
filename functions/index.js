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
            subject: "Fusion Plastic, Nuevo mensaje de contacto",
            to: [process.env.REACT_APP_NODEMAILER_RECEIVER, process.env.REACT_APP_NODEMAILER_USER],
            html: `
            <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Contact Email</title>
                    <style>
                        *,
                        body {
                            box-sizing: border-box;
                            padding: 0;
                            margin: 0;
                            font-family: 'Josefin Sans', sans-serif;
                        }

                        #email-content {
                            padding: 2rem;
                        }

                        .header {
                            font-size: 1.1rem;
                            padding: 2rem;
                            color: black;
                            background-color: #fff;
                            border-left: 4px solid #25a244;
                            margin-bottom: 1rem;
                        }

                        .info-container .title {
                            background-color: #25a244;
                            padding: 2rem;
                        }

                        .info-container .content {
                            padding: 2rem;
                        }

                        .info-container .content .description {
                            font-weight: 600;
                        }

                        .info-container .content p {
                            margin-bottom: 1rem;
                        }

                        .footer {
                            background-color: black;
                            padding: 1rem 2rem;
                            color: white;
                            text-align: center;
                        }
                    </style>
                </head>

                <body>
                    <section id="email-content">
                        <div class="header">
                            <h1>Fusion Plastic</h1>
                        </div>
                        <div class="info-container">
                            <div class="title">
                                <h3>
                                    Notificación de contacto
                                </h3>
                            </div>
                            <div class="content">
                                <p class="description">
                                    Fusion plastic le informa que ha recibido un nuevo mensaje de contacto, le presentamos la
                                    información a
                                    continuación:
                                </p>
                                <p> Nombre: ${form.name} </p>
                                <p> Teléfono / Celular: ${form.phone} </p>
                                <p> Correo: ${form.email} </p>
                                <p>Mensaje: ${form.message} </p>
                            </div>
                        </div>
                        <div class="footer">
                            Fusion Plastic
                        </div>
                    </section>
                </body>
            </html>
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
    res.send("Sending email...");
});
