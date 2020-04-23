'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthorSchema extends Schema {
    up() {
        this.create('authors', (table) => {
            table.increments()
            table.string('name')
            table.string('bio')
            table.string('lang')
            table.timestamps()
        })
    }

    down() {
        this.drop('authors')
    }
}

module.exports = AuthorSchema