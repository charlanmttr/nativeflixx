import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons"

import Movies from '../pages/Movies';
import StackRoutes from './stackRoutes'

import theme from '../styles'

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: theme.drawerBackground,
                    paddingTop: 20
                },
                drawerActiveBackgroundColor: theme.firstHighlight,
                drawerActiveTintColor: theme.title,
                drawerInactiveTintColor: theme.title
            }}
        >
            <Drawer.Screen component={StackRoutes} name="HomeDrawer"
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'movie-open' : 'movie-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen component={Movies} name="Movies"
                options={{
                    title: 'Meus filmes',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'archive' : 'archive-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}


