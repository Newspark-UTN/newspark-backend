var nodemailer = require('nodemailer');

var smtpConfig = {
    host: 'in-v3.mailjet.com',
    port: 587,
    auth: {
        user: '47b1bdd09ef8005dd93de75bf032c207',
        pass: '1f0412d3a859c5f9b0936795df6997f1'
    }
};

var mailOptions = {
    from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
    to: 'kovalsky.nicolas@gmail.com, alanszp@gmail.com', // list of receivers
    subject: 'Nuevo contacto desde Newspark ✔', // Subject line
};

class ContactFormController {
    sendMail(req, res, next) {
        const transporter = nodemailer.createTransport('smtps://newspark.utn%40gmail.com:64266426@smtp.gmail.com');

        mailOptions.from = 'newspark.utn@gmail.com';
        mailOptions.replyTo = req.body.email;
        mailOptions.subject = 'Nuevo mensaje de ' + req.body.nombre + ' para Newspark';
        mailOptions.text = req.body.mensaje || 'Contacto sin mensaje';

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return next(error);
            }
            console.log('Message sent: ' + info.response);
            return res.status(201).json({ message: 'Message sent: ' + info.response });
        });
    }
}

module.exports = new ContactFormController();
