import {createAppContainer, createStackNavigator} from 'react-navigation';
import Categories from './Categories';
import CategoryDetails from './CategoryDetails'
import StyleDetails from './StyleDetails'

const AppNavigator = createStackNavigator(
	{
		Home: Categories,
		Category: CategoryDetails,
		Style: StyleDetails
	},
	{
		initialRouteName: 'Home'
	}
);

export default createAppContainer(AppNavigator);

