import { createAppContainer, createStackNavigator } from "react-navigation";
import Categories from "./Categories";
import CategoryDetails from "./CategoryDetails";
import StyleDetails from "./StyleDetails";

const AppNavigator = createStackNavigator(
  {
    Home: Categories,
    Category: CategoryDetails,
    Style: StyleDetails
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#FB9902"
      },
      headerTintColor: "#342309",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
