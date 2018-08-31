import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  lastSavedAt: computed('recipeChangeset.{updatedAt,ingredients.@each.updatedAt}', function() {
    return Array.prototype.concat(
      [this.get('recipeChangeset.updatedAt')],
      this.get('recipeChangeset.ingredients').mapBy('updatedAt').compact()
    ).reduce((acc, date) => Math.max(date, acc), -Infinity);
  }),});
