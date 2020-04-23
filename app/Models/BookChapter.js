'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BookChapter extends Model {
    /**
     * A BookChapter is for a book.
     *
     * @method book
     *
     * @return {Object}
     */
    book() {
        return this.belongsTo('App/models/Book')
    }
}

module.exports = BookChapter
