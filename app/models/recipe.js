import DS from 'ember-data';

export default DS.Model.extend({
  updatedAt: DS.attr('moment', { defaultValue: '2018-08-31T14:10:00Z'}),

  ingredients: DS.hasMany()
});
