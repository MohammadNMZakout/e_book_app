'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Book extends Model {
    /**
     * A book can have as many chapters.
     *
     * @method chapters
     *
     * @return {Object}
     */
    chapters() {
        return this.hasMany('App/Models/BookChapter')
    }
    /**
     * A book can have as many favorites.
     *
     * @method favorites
     *
     * @return {Object}
     */
    favorites() {
        return this.hasMany('App/Models/Favorite')
    }
    /**
      * A book can have as many comments as possible.
      *
      * @method replies
      *
      * @return {Object}
      */
    comments() {
        return this.hasMany('App/Models/Comment')
    }

}

module.exports = Book
