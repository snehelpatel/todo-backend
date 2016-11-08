'use strict'

const Schema = use('Schema')

class TasksTableSchema extends Schema {

  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.timestamps()
      table.string('title')
      table.integer('user_id')
      table.integer('lists_id')
    })
  }

  down () {
    this.drop('tasks')
  }

}

module.exports = TasksTableSchema
