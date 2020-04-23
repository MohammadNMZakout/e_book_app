'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {
    /**
     * A comment belong to a user.
     *
     * @method user
     *
     * @return {Object}
     */
    user() {
        return this.belongsTo('App/Models/User')
    }
    /**
     * A comment belong to a book.
     *
     * @method book
     *
     * @return {Object}
     */
    book() {
        return this.belongsTo('App/Models/Book')
    }
}

module.exports = Comment
