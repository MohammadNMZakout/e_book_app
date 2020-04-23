'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RateSchema extends Schema {
  up() {
    this.create('rates', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('book_id').unsigned().notNullable().references('id').inTable('books')
      table.integer('rate').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('rates')
  }
}

module.exports = RateSchema
