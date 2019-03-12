import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'footer',
  classNames: ['nav-links'],
  perPage: 30,
  pageLimit: 10,

  showPrev: computed('page', function() {
    let page = Number.parseInt(this.get('page'));

    return page > 1;
  }),

  showNext: computed('items', 'page', function() {
    let items = this.get('items');
    let page = this.get('page');
    let perPage = this.get('perPage');
    let pageLimit = this.get('pageLimit');

    return items.length === perPage && page < pageLimit;
  })
});
