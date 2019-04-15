import React, { Component } from "react";
import { graphql, QueryRenderer } from "react-relay";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { withNavigation } from "react-navigation";

import environment from "./relay/Environment";

class CategoryDetails extends Component {
  static navigationOptions = {
    title: "Category"
  };
  render() {
    const { navigation } = this.props;
    const categoryID = navigation.getParam("categoryID");
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query CategoryDetailsQuery($categoryID: ID!) {
            category(id: $categoryID) {
              name
              description
              styles {
                name
                id
              }
            }
          }
        `}
        variables={{ categoryID }}
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
          return (
            <View>
			  <Text>Name:</Text>
			  <Text>{props.category.name}</Text>
			  <Text>Description:</Text>
			  <Text>{props.category.description}</Text>
              <Text>Styles:</Text>
              {props.category.styles.map(style => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Style", {
                        styleID: style.id,
                        styleName: style.name
                      })
                    }
                    key={style.id}
                  >
                    <Text>{style.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        }}
      />
    );
  }
}

export default withNavigation(CategoryDetails);
