import Component from '@ember/component';

export default Component.extend({
    actions: {
        viewTodo(todo) {
            alert(todo);
        }
    }
});
