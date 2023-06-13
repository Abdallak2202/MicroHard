'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
      /* const recurringServices= await strapi.db.query('api::recurrente.recurrente').findMany();
      console.log("ALL", recurringServices);
  
      recurringServices.forEach(service => {
        console.log("FECHA DE ENTRY", service.fecha);
        console.log("RENOVABLE", service.renovable);
        if (service.renovable) {
          console.log("INGRESO AL IF");
          const intervalId= setInterval(async () => {
            const now= new Date();
            console.log("NOW", now);
            const nextDay= new Date(service.fecha);
            console.log("NEXT DAY before", nextDay);
            nextDay.setDate(nextDay.getDate() + 1);
            nextDay.setHours(0, 0, 0, 0);
            console.log("NEXT DAY after", nextDay);
            /* const nextMonth= new Date(service.fecha);
            nextMonth.setMonth(nextMonth.getMonth() + 1);
            console.log("NEXT MONTH", nextMonth); */
  
            /* if (now >= nextDay) {
              console.log(`NOW: ${now} es mayor o igual que NEXTDAY: ${nextDay}`);
              console.log("FECHA QUE SE GUARDA", nextDay.toISOString().substring(0, 10));
              try {
                await strapi.db.query('api::recurrente.recurrente').create({
                  data: {
                    cliente: service.cliente,
                    servicio: service.servicio,
                    descripcion: service.descripcion,
                    fecha: nextDay.toISOString().substring(0, 10),
                    renovable: service.renovable,
                    monto: service.monto,
                    tipo: service.tipo
                  }
                });
              }
              catch(error) {
                console.log(error);
              };
              console.log("TERMINO DE CREARSE!!");
              clearInterval(intervalId);
            }
            console.log("HIZO UN CHEQUEO");
          }, 30000); // checks every 30s */
  
            /* if (now >= nextMonth) {
              await strapi.db.query('api::recurrente.recurrente').create({
                data: {
                  cliente: service.cliente,
                  servicio: service.servicio,
                  descripcion: service.descripcion,
                  fecha: nextMonth,
                  renovable: service.renovable,
                  monto: service.monto,
                  tipo: service.tipo
                }
              });
              clearInterval(intervalId);
            }
          }, 86400000); */ // checks every 24 hours
//        }
//      });
  },
};