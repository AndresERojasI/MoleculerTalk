const ApiGwService = require("moleculer-web");

module.exports = {
    name: "api",
    mixins: [ApiGwService],
    settings: {
        // Change port setting
        port: 8080,
    },
    actions: {
        async searchBook(ctx) {
            return await ctx.broker.call('books.findBook', {book_id: ctx.params.id});
        }
    }
}