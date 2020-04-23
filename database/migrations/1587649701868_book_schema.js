'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSchema extends Schema {
  up() {
    this.create('books', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.integer('author_id').unsigned().references('id').inTable('authors')
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.integer('chapters')
      table.string('length')
      table.text('recommendations')
      table.text('audio_intro')
      table.text('book_intro')
      table.text('cover')
      table.boolean('is_paid').defaultTo(false)
      table.float('price').defaultTo(0)
      table.timestamps()
    })
  }

  down() {
    this.drop('books')
  }
}

module.exports = BookSchema
