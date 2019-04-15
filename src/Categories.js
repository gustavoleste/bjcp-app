import React, { Component } from "react";
import { graphql, QueryRenderer } from "react-relay";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from "react-native";

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
            <View style={styles.constainer}>
              <Text style={styles.title}>Categories:</Text>
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
                      <Text style={styles.category}>{item.name}</Text>
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

export default Categories;

const styles = StyleSheet.create({
  constainer:{
    backgroundColor: '#FFF1DC',
    flex: 1
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#975B02',
    margin: 5,
    padding: 10
  },
  category:{
    fontFamily: 'monospace',
    fontSize: 15,
    margin: 5,
    padding: 10,
    color: '#342309',
    fontWeight: 'bold',
  }
})
