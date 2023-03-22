module.exports = ({ env }) => ({
    // ...
    plugins: {
      // ...
      'strapi-plugin-magic': {
        enabled: true,
        options: {
          publicKey: env('MAGIC_PUBLIC_KEY'),
          secretKey: env('MAGIC_SECRET_KEY'),
        },
      },
    },
  });






/* module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendmail', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'microhardarg@gmail.com',
          defaultReplyTo: 'microhardarg@gmail.com',
          testAddress: 'microhardarg@gmail.com',
        },
      },
    },
    // ...
  }); */