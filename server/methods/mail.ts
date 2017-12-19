import { Meteor } from "meteor/meteor";
import { Email } from 'meteor/email';
Meteor.methods({
  sendEmail(to, from, email, phone) {
    this.unblock();
    Email.send({
    to: to,
    from: email ,
    subject: "Contacto de su pagina web Valiara",
    text: "Nombre: " + from + " correo: " + email + " telefono: " + phone
    });
  }
});
