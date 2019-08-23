import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from './screens/Login';

const Routes = createAppContainer(
	createStackNavigator(
		{
			Login: {
				screen: Login,
				navigationOptions: () => ({
					headerTransparent: true,
				}),
			},
		},
		{
			initialRouteName: 'Login',
		},
	),
);
export default Routes;
