import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';
import { observer, computed } from '@ember/object';

export default Controller.extend({
    todoItem: '',
    responseMessage: '',

    // using a custom computed property
    // isDisabled: computed('todoItem', function() {
    //     return this.get('todoItem') === '';
    // }),

    // using a predefined computed propert called empty
    isDisabled: empty('todoItem'),

    getTodoItem: computed('todoItem', function() {
        return this.get('todoItem');
    }),

    onTodoItemChange: observer('todoItem', function() {
        return this.get('todoItem');
    }),

    actions: {
        addTodo() {
            const todoItem = this.get('todoItem');
            const newTodoItem = this.store.createRecord('todo', { todoItem });
            newTodoItem.save();

            this.set('responseMessage',
                `"${todoItem}" has been successfully added to your list of todos`)
            this.set('todoItem', '');
        }
    },

});
