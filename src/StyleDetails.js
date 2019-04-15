import React, { Component } from "react";
import { graphql, QueryRenderer } from "react-relay";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";

import environment from "./relay/Environment";

class StyleDetails extends Component {
  static navigationOptions = {
    title: "Style"
  };
  render() {
    console.log(this.props);
    const { navigation } = this.props;
    const styleID = navigation.getParam("styleID");
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query StyleDetailsQuery($styleID: ID!) {
            style(id: $styleID) {
              name
              history
              ingredients
              comparison
              comments
              aroma
              flavor
            }
          }
        `}
        variables={{ styleID }}
        render={({ error, props }) => {
          if (error) {
            return (
              <View>
                <Text>Error!</Text>
              </View>
            );
          }
          if (!props) {
            return <ActivityIndicator />;
          }
          console.log(props.style);
          return (
            <ScrollView>
              <Text>Name:</Text>
              <Text>{props.style.name}</Text>
              <Text>History:</Text>
              <Text>{props.style.aroma}</Text>
              <Text>Ingredients:</Text>
              <Text>{props.style.ingredients}</Text>
              <Text>Comparison:</Text>
              <Text>{props.style.comparison}</Text>
              <Text>Comments:</Text>
              <Text>{props.style.comments}</Text>
              <Text>Aroma:</Text>
              <Text>{props.style.aroma}</Text>
              <Text>Flavor:</Text>
              <Text>{props.style.flavor}</Text>
            </ScrollView>
          );
        }}
      />
    );
  }
}

export default withNavigation(StyleDetails);
