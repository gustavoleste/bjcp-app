import React, { Component } from "react";
import { graphql, QueryRenderer } from "react-relay";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView
} from "react-native";

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
            <ScrollView style={styles.constainer}>
              <Text style={styles.title}>Name:</Text>
              <Text style={styles.details}>{props.category.name}</Text>
              <Text style={styles.title}>Description:</Text>
              <Text style={styles.details}>{props.category.description}</Text>
              <Text style={styles.title}>Styles:</Text>
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
                    <Text style={styles.details}>{style.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          );
        }}
      />
    );
  }
}

export default CategoryDetails;

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: '#FFF1DC',
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#975B02',
    margin: 5,
    padding: 10
  },
  details: {
    fontFamily: 'monospace',
    fontSize: 15,
    margin: 5,
    padding: 10,
    color: '#342309',
    fontWeight: 'bold'
  }
});
