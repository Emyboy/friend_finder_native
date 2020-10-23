import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home/Home';
import Notifications from '../pages/Notifications/Notifications';
import Profile from '../pages/Profile/Profile';
import Global from '../Global';
import { Feather } from '@expo/vector-icons';
import Messages from '../pages/Messages/Messages';

const Tab = createBottomTabNavigator();

const TabScreen = ({
    name,
    component,
    icon
}) => {
    return (
        <Tab.Screen name="Home" component={Home} />
    )
}

export default function MyTabs() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeBackgroundColor: Global.PRIMARY_COLOR_LIGHT,
            inactiveBackgroundColor: Global.PRIMARY_COLOR,
            inactiveTintColor: Global.PRIMARY_COLOR_DARK,
            activeTintColor: Global.PRIMARY_COLOR,
        }}>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Notifications" 
                component={Notifications} 
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="bell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Messages" 
                component={Messages} 
                options={{
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="mail" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}