import React, { Component } from "react";
import { graphql, QueryRenderer } from "react-relay";
import { View, Text, ActivityIndicator, ScrollView,StyleSheet } from "react-native";

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
            <ScrollView style={styles.constainer}>
              <Text style={styles.title}>Name:</Text>
              <Text style={styles.details}>{props.style.name}</Text>
              <Text style={styles.title}>History:</Text>
              <Text style={styles.details}>{props.style.aroma}</Text>
              <Text style={styles.title}>Ingredients:</Text>
              <Text style={styles.details}>{props.style.ingredients}</Text>
              <Text style={styles.title}>Comparison:</Text>
              <Text style={styles.details}>{props.style.comparison}</Text>
              <Text style={styles.title}>Comments:</Text>
              <Text style={styles.details}>{props.style.comments}</Text>
              <Text style={styles.title}>Aroma:</Text>
              <Text style={styles.details}>{props.style.aroma}</Text>
              <Text style={styles.title}>Flavor:</Text>
              <Text style={styles.details}>{props.style.flavor}</Text>
            </ScrollView>
          );
        }}
      />
    );
  }
}

export default StyleDetails;

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
