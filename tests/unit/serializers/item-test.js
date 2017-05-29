import { moduleForModel, test } from 'ember-qunit';

moduleForModel('item', 'Unit | Serializer | item', {
  // Specify the other units that are required for this test.
  needs: ['serializer:item']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject(),
      serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
