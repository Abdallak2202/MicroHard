module.exports = ({ env }) => ({
  auth0: {
    provider: "auth0",
    name: "auth0",
    clientId: env("AUTH0_CLIENT_ID"),
    clientSecret: env("AUTH0_CLIENT_SECRET"),
    audience: env("AUTH0_AUDIENCE"),
    scope: ["openid", "profile"],
    domain: env("AUTH0_DOMAIN"),
    },
  });