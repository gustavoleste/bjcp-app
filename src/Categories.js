import React, { Component } from "react";
import { graphql, QueryRenderer } from "react-relay";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { withNavigation } from "react-navigation";

import environment from "./relay/Environment";

class Categories extends Component {
  static navigationOptions = {
    title: "Style Guide - BJCP 2015"
  };
  render() {
    const { navigation } = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query CategoriesQuery {
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
            return <ActivityIndicator />;
          }
          return (
            <View>
              <Text>Categories:</Text>
              <FlatList
                data={props.categories}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Category', {
                          categoryID: item.id,
                          categoryName: item.name
                        })
                      }
                    >
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          );
        }}
      />
    );
  }
}

export default withNavigation(Categories);
