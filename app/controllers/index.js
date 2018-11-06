import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({
    todoItem: '',

    // using a custom computed property
    // isDisabled: computed('todoItem', function() {
    //     return this.get('todoItem') === '';
    // }),

    // using a predefined computed propert called empty
    isDisabled: empty('todoItem'),
});
