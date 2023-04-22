module.exports = {
  async isAuthenticated(ctx, next) {
    if (!ctx.state.user) {
      return ctx.unauthorized("You must be logged in to perform this action.");
    }

    await next();
    },
  };