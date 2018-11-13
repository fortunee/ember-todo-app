import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // return ['Pray to the Lord', 'Learn Emberjs', 'Write an article', 'Sing a love song'];
        return this.store.findAll('todo');
    }
});
