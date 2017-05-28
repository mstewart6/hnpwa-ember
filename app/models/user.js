import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  delay: attr('number'),
  created: attr('unix-date'),
  karma: attr('number'),
  about: attr('string'),

  submitted: hasMany('item')
});
