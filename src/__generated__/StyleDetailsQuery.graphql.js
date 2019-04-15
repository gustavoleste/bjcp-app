/**
 * @flow
 * @relayHash ecf4b4d57992092c90dbc5e6d8fbf9a8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StyleDetailsQueryVariables = {|
  styleID: string
|};
export type StyleDetailsQueryResponse = {|
  +style: ?{|
    +name: string,
    +history: string,
    +ingredients: string,
    +comparison: string,
    +comments: string,
    +aroma: ?string,
    +flavor: string,
  |}
|};
export type StyleDetailsQuery = {|
  variables: StyleDetailsQueryVariables,
  response: StyleDetailsQueryResponse,
|};
*/


/*
query StyleDetailsQuery(
  $styleID: ID!
) {
  style(id: $styleID) {
    name
    history
    ingredients
    comparison
    comments
    aroma
    flavor
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "styleID",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "styleID",
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
  "name": "history",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ingredients",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comparison",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "comments",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "aroma",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "flavor",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "StyleDetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "style",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Style",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "StyleDetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "style",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Style",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "StyleDetailsQuery",
    "id": null,
    "text": "query StyleDetailsQuery(\n  $styleID: ID!\n) {\n  style(id: $styleID) {\n    name\n    history\n    ingredients\n    comparison\n    comments\n    aroma\n    flavor\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8cdaa724495c515d2e9f5d8e1b38d6f3';
module.exports = node;
