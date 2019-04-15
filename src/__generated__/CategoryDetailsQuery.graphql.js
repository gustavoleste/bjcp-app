/**
 * @flow
 * @relayHash 7e242875fd478ba2701821d2fb2d9af2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CategoryDetailsQueryVariables = {|
  categoryID: string
|};
export type CategoryDetailsQueryResponse = {|
  +category: ?{|
    +name: ?string,
    +description: ?string,
    +styles: ?$ReadOnlyArray<?{|
      +name: string,
      +id: string,
    |}>,
  |}
|};
export type CategoryDetailsQuery = {|
  variables: CategoryDetailsQueryVariables,
  response: CategoryDetailsQueryResponse,
|};
*/


/*
query CategoryDetailsQuery(
  $categoryID: ID!
) {
  category(id: $categoryID) {
    name
    description
    styles {
      name
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "categoryID",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "categoryID",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "styles",
  "storageKey": null,
  "args": null,
  "concreteType": "Style",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    (v4/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CategoryDetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "category",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Category",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CategoryDetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "category",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Category",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CategoryDetailsQuery",
    "id": null,
    "text": "query CategoryDetailsQuery(\n  $categoryID: ID!\n) {\n  category(id: $categoryID) {\n    name\n    description\n    styles {\n      name\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '10240387b5848771425f2391e75fb778';
module.exports = node;
