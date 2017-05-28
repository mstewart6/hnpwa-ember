import { moduleForModel, test } from 'ember-qunit';

moduleForModel('show-story', 'Unit | Model | show story', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(Boolean(model));
});
