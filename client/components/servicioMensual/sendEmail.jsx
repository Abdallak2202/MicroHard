import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmailToClient(client, service) {
  const msg = {
    to: 'edinson@codigopalante.org',
    from: 'perezea1010@gmail.com',
    subject: 'Se ha cargado un servicio recurrente en tu cuenta',
    text: `Se ha cargado un servicio recurrente en tu cuenta por el monto de ${service.attributes.monto}.`,
    html: `<p>Se ha cargado un servicio recurrente en tu cuenta por el monto de ${service.attributes.monto}.</p>`,
  };
  
  try {
    await sgMail.send(msg);
    console.log(`Correo enviado a ${client.email} con éxito.`);
  } catch (error) {
    console.error(`Error al enviar el correo a ${client.email}: ${error}`);
  }
}

async function getClientWithRecurringServices() {
    const clientsResponse = await fetch("http://localhost:1337/api/recurrentes?populate=*");
    const clientsJson = await clientsResponse.json();
    const clientsData = clientsJson.data;

}

async function processRecurringServices() {
  // Aquí se cargan los servicios recurrentes en la cuenta corriente de los clientes
const recurrentes = await getClientWithRecurringServices();
recurrentes.forEach((recurrente) => {
  if (recurrente.attributes.renovable === true){
    let body= {
      data: {
        cliente: recurrente.attributes.cliente.data.id,
        monto: recurrente.attributes.renovable,
        tipo: recurrente.attributes.tipo
      }
    };
    const cuentaResponse = fetch("http://localhost:1337/api/cuentas/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    });

    if (!cuentaResponse.ok) {
      alert("No se pudo cargar el monto en cuenta");
      throw new Error("Network response was not ok");
    }
    alert("monto cargado satisfactoriamente");
    console.log(cuentaResponse.json());
  }
})
  
  const clients = await getClientWithRecurringServices();
  
  clients.forEach((client) => {
    client.attributes.forEach((service) => {
      sendEmailToClient(client, service);
    });
  });
}

processRecurringServices();
