/**
 * @flow
 * @relayHash 4d86559da244254ce19b21bb62c449e0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CategoriesQueryVariables = {||};
export type CategoriesQueryResponse = {|
  +categories: ?$ReadOnlyArray<?{|
    +name: ?string,
    +id: string,
  |}>
|};
export type CategoriesQuery = {|
  variables: CategoriesQueryVariables,
  response: CategoriesQueryResponse,
|};
*/


/*
query CategoriesQuery {
  categories {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "categories",
    "storageKey": null,
    "args": null,
    "concreteType": "Category",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CategoriesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CategoriesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CategoriesQuery",
    "id": null,
    "text": "query CategoriesQuery {\n  categories {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dfdf5dd84774909e2b06f968fc2a26d3';
module.exports = node;
