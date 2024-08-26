import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeAktif from './icon/home-activated.png';
import HomeNonAktif from './icon/home-inactive.png';
import ShopAktif from './icon/shop-activated.png';
import ShopNonAktif from './icon/shop-inactive.png';
import BagAktif from './icon/bag-activated.png';
import BagNonAktif from './icon/bag-inactive.png';
import FavoritesAktif from './icon/favorites-activated.png';
import FavoritesNonAktif from './icon/favorites-inactive.png';
import ProfilAktif from './icon/profil-activated.png';
import ProfilNonAktif from './icon/profil-inactive.png';

import Login from './page/Login';
import SignUp from './page/SignUp';
import ForgotPassword from './page/ForgotPassword';
import Home from './page/Home';
import VisualSearch from './page/VisualSearch';
import Shop from './page/Shop';
import Bag from './page/Bag';
import Favorites from './page/Favorites';
import Profile from './page/Profile';
import Camera from './page/Camera';
import HomeMain from './HomeMain';
import CategoriesScreen from './page/Categories';
import FiltersScreen from './page/Filter';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeMain" component={HomeMain} />
    </Stack.Navigator>
  );
};

const ShopStack = () => {
  return (
    <Stack.Navigator initialRouteName="Shop">
      <Stack.Screen name="Shop" component={Shop} options={{ headerShown: false }} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? HomeAktif : HomeNonAktif} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? ShopAktif : ShopNonAktif} />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? BagAktif : BagNonAktif} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? FavoritesAktif : FavoritesNonAktif} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? ProfilAktif : ProfilNonAktif} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Filter">
        <Stack.Screen name="Filter" component={FiltersScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeMain" component={HomeMain} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="VisualSearch" component={VisualSearch} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Bag" component={Bag} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
