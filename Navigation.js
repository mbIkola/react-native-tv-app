import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './Home';
import LoginScreen from './Login';
import SignUpScreen from './SignUp';
import UserInfoScreen from './UserInfo';
import SearchUserScreen from './SearchUser';
import UserOrderScreen from './UserOrder';


const AppNavigator = createStackNavigator(
  {
  HomeScreen :HomeScreen,
  LoginScreen : LoginScreen ,
  SignUpScreen : SignUpScreen,
  UserInfoScreen : UserInfoScreen,
  SearchUserScreen : SearchUserScreen,
  UserOrderScreen : UserOrderScreen
  },
  {
    initialRouteName: 'HomeScreen'
  }
)
  export default createAppContainer(AppNavigator)


