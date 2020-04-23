'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('book_id').unsigned().notNullable().references('id').inTable('books')
      table.text('comment').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentSchema
