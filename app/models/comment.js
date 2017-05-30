import Item from './item';
import attr from 'ember-data/attr';

export default Item.extend({
  type: 'comment',
  user: attr('string'),
  level: attr('number')
});
