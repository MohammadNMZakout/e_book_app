'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookChapterSchema extends Schema {
  up() {
    this.create('book_chapters', (table) => {
      table.increments()
      table.integer('book_id').notNullable().unsigned().references('id').inTable('books')
      table.integer('order').unsigned()
      table.string('title').notNullable()
      table.boolean('is_paid').defaultTo(true)
      table.text('link')
      table.integer('minutes')
      table.integer('seconds')
      table.timestamps()
    })
  }

  down() {
    this.drop('book_chapters')
  }
}

module.exports = BookChapterSchema
