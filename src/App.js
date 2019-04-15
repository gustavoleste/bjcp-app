import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import { View, Text } from "react-native";

import environment from "./relay/Environment";

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            categories {
              name
              id
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return (
              <View>
                <Text>Error!</Text>
              </View>
            );
          }
          if (!props) {
            return (
              <View>
                <Text>Loading...</Text>
              </View>
            );
          }
          console.log(props.categories);
          return props.categories.map(category => {
            return (
              <View key={category.id}>
                <Text>{category.name}</Text>
              </View>
            );
          });
        }}
      />
    );
  }
}
