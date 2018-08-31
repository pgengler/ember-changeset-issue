import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import Changeset from 'ember-changeset';

export default Route.extend({
  model(params) {
    return hash({
      recipe: this.store.findRecord('recipe', params.id, {
        include: 'ingredients'
      })
    });
  },

  afterModel(model) {
    model.recipeChangeset = new Changeset(model.recipe);
  }
});
