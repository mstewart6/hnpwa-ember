import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    user: { embedded: 'always' },
    comments: { embedded: 'always' }
  }
});

// function serializeComments(comments) {
//   let parentComments = comments.map((comment) => {
//     return {
//       type: 'comment',
//       id: comment.id
//     };
//   });
//
//   return parentComments;
// }
//
// function serializeIncludedComments(comments) {
//   let nestedComments = [],
//       topLevelComments = comments.map((comment) => {
//         let baseComment = {
//           type: 'comment',
//           id: comment.id,
//           attributes: comment
//         };
//
//         if(baseComment.comments) {
//           baseComment.relationships = serializeComments(baseComment.comments);
//           nestedComments.push(serializeIncludedComments(baseComment.comments));
//         }
//
//         return baseComment;
//       });
//
//   return [].concat(topLevelComments, nestedComments);
// }
//
// export default DS.JSONSerializer.extend({
//   normalizeResponse(store, primaryModelClass, payload, id, requestType) {
//     let comments = serializeComments(payload.comments),
//         response = {
//           data: {
//             attributes: payload,
//             relationships: {
//               comments: comments
//             }
//           },
//           included: serializeIncludedComments(payload.comments)
//         };
//
//     delete response.data.attributes.comments;
//
//     response.data.type = 'item';
//
//     response.data.id = response.data.attributes.id;
//     delete response.data.attributes.id;
//
//     response.data.relationships.user = { type: 'user', id: payload.user }
//     response.included.user = { type: 'user', id: payload.user }
//
// console.log(response);
//     return response;
//   },
//
//   serialize(snapshot, options) {
//     debugger;
//     console.log(snapshot);
//   }
// });
