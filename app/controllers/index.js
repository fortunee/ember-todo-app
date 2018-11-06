import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    todoItem: '',

    isDisabled: computed('todoItem', function() {
        return this.get('todoItem') === '';
    }),
});
