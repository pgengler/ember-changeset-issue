import DS from 'ember-data';

export default DS.Model.extend({
  updatedAt: DS.attr('number'),

  ingredients: DS.hasMany()
});
