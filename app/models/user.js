import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  created_time: attr('unix-date', {
    defaultValue: function() {
      return new Date();
    }
  }),
  karma: attr('number', {
    defaultValue: 0
  }),
  avg: attr('string'),
  about: attr('string')
});
