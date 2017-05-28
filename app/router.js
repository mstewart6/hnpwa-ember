import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// eslint-disable-next-line array-callback-return
Router.map(function() {
  this.route('index', { path: '' });
  this.route('top');
  this.route('new');
  this.route('show');
  this.route('ask');
  this.route('jobs');
  this.route('item', { path: '/item/:item_id' });
  this.route('user', { path: '/user/:user_id' });
});

export default Router;

/*
https://hacker-news.firebaseio.com/v0/topstories
https://hacker-news.firebaseio.com/v0/newstories
https://hacker-news.firebaseio.com/v0/showstories
https://hacker-news.firebaseio.com/v0/askstories
https://hacker-news.firebaseio.com/v0/jobstories

https://hacker-news.firebaseio.com/v0/beststories
*/
