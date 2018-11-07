import DS from 'ember-data';

export default DS.Model.extend({
  todoItem: DS.attr('string')
});
