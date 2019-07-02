const fakeDb = require('./fakeDB');

module.exports = {
    name: "authors",
    actions: {
        findAuthor(ctx) {
            return ctx.params.author_id in fakeDb ? fakeDb[ctx.params.author_id] : false;
        }
    }
}