import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['paginated-list'],

  tagName: 'section',
  // The page we are currently on

  page: 1,
  // The number of items to show per page

  paginateBy: 10,
  // Returns the list of items for the current page only

  paginatedItems: Ember.computed('items', 'page', function() {
    let i = (parseInt(this.get('page'), 10) - 1) * parseInt(this.get('paginateBy'), 10),
        j = i + parseInt(this.get('paginateBy'), 10);
    return this.get('items').slice(i, j);
  }),
  // The total number of pages that our items span

  numberOfPages: Ember.computed('page', function() {
    let n = this.get('items.length'),
        c = parseInt(this.get('paginateBy'), 10),
        r = Math.floor(n / c);

    if(n % c > 0) {
      r += 1;
    }
    return r;
  }),
  // An array containing the number of each page: [1, 2, 3, 4, 5, ...]

  pageNumbers: Ember.computed('numberOfPages', function() {
    let n = Array(this.get('numberOfPages'));

    for(let i = 0; i < n.length; i++) {
      n[i] = i + 1;
    }
    return n;
  }),
  // Whether or not to show the "next" button

  showNext: Ember.computed('page', function() {
    return (this.get('page') < this.get('numberOfPages'));
  }),
  // Whether or not to show the "previous" button

  showPrevious: Ember.computed('page', function() {
    return (this.get('page') > 1);
  }),
  // The text to display on the "next" button

  nextText: 'Next >>',
  // The text to display on the "previous" button

  previousText: '<< Previous',
  actions: {
    // Show the next page of items

    nextClicked() {
      if(this.get('page') + 1 <= this.get('numberOfPages')) {
        this.set('page', this.get('page') + 1);
      }
    },
    // Show the previous page of items

    previousClicked() {
      if(this.get('page') > 0) {
        this.set('page', this.get('page') - 1);
      }
    },
    // Go to the clicked page of items

    pageClicked(pageNumber) {
      this.set('page', pageNumber);
    }
  }
});
