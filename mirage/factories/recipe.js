import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  updatedAt: () => faker.random.number()
})
