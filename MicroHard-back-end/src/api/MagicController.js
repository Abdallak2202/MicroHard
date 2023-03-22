const Magic = require('@magic-sdk/admin');
const { sanitizeEntity } = require('strapi-utils');

const magic = new Magic(process.env.MAGIC_SECRET_KEY);

module.exports = {
  async loginWithMagicLink(ctx) {
    const { email } = ctx.request.body;

    try {
      const didToken = await magic.auth.loginWithMagicLink({ email });

      let user = await strapi.query('user', 'users-permissions').findOne({ email });

      if (!user) {
        const data = {
          email,
          username: email,
          provider: 'magic',
          confirmed: true,
        };

        user = await strapi.plugins['users-permissions'].services.user.add(data);
      }

      const jwt = strapi.plugins['users-permissions'].services.jwt.issue({ id: user.id });

      return {
        jwt,
        user: sanitizeEntity(user, { model: strapi.query('user', 'users-permissions').model }),
      };
    } catch (error) {
      return ctx.badRequest('Invalid token');
    }
  },
};








/* const Magic = require('@magic-sdk/admin');
const { sanitizeEntity } = require('strapi-utils');

const magic = new Magic(process.env.MAGIC_SECRET_KEY);

module.exports = {
  async loginWithMagicLink(ctx) {
    const { email } = ctx.request.body;

    try {
      const didToken = await magic.auth.loginWithMagicLink({ email });

      const user = await strapi.query('user', 'users-permissions').findOne({ email });

      if (!user) {
        const data = {
          email,
          username: email,
          provider: 'magic',
          confirmed: true,
        };

        user = await strapi.plugins['users-permissions'].services.user.add(data);
      }

      const jwt = strapi.plugins['users-permissions'].services.jwt.issue({ id: user.id });

      return {
        jwt,
        user: sanitizeEntity(user, { model: strapi.query('user', 'users-permissions').model }),
      };
    } catch (error) {
      return ctx.badRequest('Invalid token');
    }
  },
}; */
