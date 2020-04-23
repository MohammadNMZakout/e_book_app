'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Favorite extends Model {
    /**
     * A favorite is for a book.
     *
     * @method book
     *
     * @return {Object}
     */
    book() {
        return this.belongsTo('App/Models/Book')
    }

    /**
     * A favorite is for a user.
     *
     * @method user
     *
     * @return {Object}
     */
    user() {
        return this.belongsTo('App/Models/User')
    }

    /**
     * A favorite is for a comment.
    *
    * @method comment
    *
    * @return {Object}
    */
    comment() {
        //Can Be null
        return this.belongsTo('App/Models/Comment')
    }
}

module.exports = Favorite
