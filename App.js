import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultSingle from "./src/screens/components/ResultSingle";
import SearchScreen from "./src/screens/SearchScreen";

const StackNavigatior = createStackNavigator(
  {
    // all routes in form of key value pairs to set up navigation.
    Search: SearchScreen,
    ResultSingleTemplate: ResultSingle,
  },

  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business search",
    },
  }
);

export default createAppContainer(StackNavigatior);
