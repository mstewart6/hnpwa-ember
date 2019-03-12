import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
import fetch from 'fetch';

export default Route.extend({
  host: 'https://api.hackerwebapp.com',
  fastboot: service(),

  queryParams: {
    page: {
      refreshModel: true
    }
  },

  async model(params) {
    let page = params.page;
    let type = this.get('type');
    let shoebox = this.get('fastboot.shoebox');
    let storeName = 'hnpwa-shoebox';
    let shoeboxStore = shoebox.retrieve(storeName);
    let key = `${type}-${page}`;

    if (this.get('fastboot.isFastBoot')) {
      let response = await fetch(`${this.get('host')}/${type}?page=${page}`);
      let data = await response.json();

      //
      if (!shoeboxStore) {
        shoeboxStore = {};
        shoebox.put(storeName, shoeboxStore);
      }

      return shoeboxStore[key] = data;
    } else {
      // Load data from shoebox, if present, otherwise fetch
      if (shoeboxStore && shoeboxStore[key]) {
        return shoeboxStore[key];
      } else {
        let response = await fetch(`${this.get('host')}/${type}?page=${page}`);
        return await response.json();
      }
    }
  }
});
