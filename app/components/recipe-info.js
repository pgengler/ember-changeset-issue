import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({
  lastSavedAt: computed('recipeChangeset.{updatedAt,ingredients.@each.updatedAt}', function() {
    return Array.prototype.concat(
      [this.get('recipeChangeset.updatedAt')],
      this.get('recipeChangeset.ingredients.content').mapBy('updatedAt').compact()
    ).reduce((acc, date) => moment.max(date, acc), moment('1970-01-01'));
  }),});
