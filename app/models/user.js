import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  delay: attr('number'),
  created: attr('unix-date', {
    defaultValue: function() {
      return new Date();
    }
  }),
  karma: attr('number', {
    defaultValue: 0
  }),
  about: attr('string', {
    defaultValue: ''
  }),

  submitted: hasMany('item')
});
