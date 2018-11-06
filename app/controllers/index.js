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
        console.log('Getting actual todo item', this.get('todoItem'));
        return this.get('todoItem');
    }),

    onTodoItemChange: observer('todoItem', function() {
        console.log('Observing todo item', this.get('todoItem'));
        return this.get('todoItem');
    }),

    actions: {
        addTodo() {
            alert(`Adding todo ${this.get('todoItem')} in progress`);
            this.set('responseMessage',
                `"${this.get('todoItem')}" has been successfully added to your list of todos`)
            this.set('todoItem', '');
        }
    },

});
