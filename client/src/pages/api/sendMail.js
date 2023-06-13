const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

const sendMail = async (recipientEmail, subject, content) => {
  try {
    const msg = {
      to: recipientEmail,
      from: 'perezea1010@gmail.com', // Reemplaza esto con tu dirección de correo electrónico de remitente
      subject: subject,
      text: content,
    };

    await sgMail.send(msg);

    console.log('Correo electrónico enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
};

// Ejemplo de llamada a la función sendMail
const recipientEmail = 'edinson@codigopalante.org'; // Reemplaza esto con la dirección de correo electrónico del destinatario
const subject = '¡Hola!';
const content = 'Este es un correo de prueba enviado desde Next.js con SendGrid.';
sendMail(recipientEmail, subject, content);