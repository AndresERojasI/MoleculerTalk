const fakeDb = require('./fakeDB');

module.exports = {
    name: "books",
    actions: {
        async findBook(ctx) {
            if(ctx.params.book_id in fakeDb) {
                const book = fakeDb[ctx.params.book_id];
                try{
                    let author = await ctx.broker.call('authors.findAuthor', {author_id: book.author})

                    return {
                        ...book,
                        author
                    }
                } catch (exception) {
                    return {
                        success: false,
                        message: "We had a problem trying to get your book.",
                        error: exception.message
                    }
                }
            } else {
                return {
                    success: false,
                    message: "We could not find your book :(",
                }
            }
        }
    }
}