import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  host: 'https://api.hackerwebapp.com',
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  async model(params) {
    let page = params.page;
    let type = 'news';

    let response = await fetch(`${this.get('host')}/${type}?page=${page}`);

    return await response.json();
  }
});
