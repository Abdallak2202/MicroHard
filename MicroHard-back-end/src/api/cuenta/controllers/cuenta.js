'use strict';

/**
 * cuenta controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cuenta.cuenta', {
    async create(ctx) {
        const {cliente, tipo, monto}= ctx.request.body.data;

        // Gets previous entries from the client
        try {
            var entries=await strapi.db.query('api::cuenta.cuenta').findMany({
                where: {cliente: cliente},
                orderBy: { id: 'ASC' },
            });
    
        // Calculates total debt from previous entries
            var total=0;
    
            entries.map(entry => {
                if (entry.tipo==="Presupuesto" || entry.tipo==="Recurrente") {
                    total=total+entry.monto;
                }
                if (entry.tipo==="Abono") {
                    total=total-entry.monto;
                }
            });

        // Calculates final debt based on recent amount
            if (tipo==="Presupuesto" || tipo==="Recurrente") {
                total=total+monto;
            }
            else if (tipo==="Abono") {
                total=total-monto;
            };
    
        // Assigns debt to property "deuda"
            ctx.request.body.data.deuda=total;
    
        // Creates new entry for the client
            return strapi.db.query('api::cuenta.cuenta').create({
                data: {
                    cliente: cliente,
                    tipo: tipo,
                    monto: monto,
                    deuda: total
                }
            });

        }
        catch(error) {
            console.log(error);
        };
    }
});