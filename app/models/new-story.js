import Item from './item';
import attr from 'ember-data/attr';

export default Item.extend({
  user: attr('string')
});
