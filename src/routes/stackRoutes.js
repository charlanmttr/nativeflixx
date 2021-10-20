import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import themes from '../styles'

import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Search from '../pages/Search'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                component={Home}
                name="Home"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                component={Detail}
                name="Detail"
                options={{
                    headerShown: false,
                    title: 'Detalhes'
                }}
            />
            <Stack.Screen
                component={Search}
                name="Search"
                options={{
                    title: 'Sua busca',
                    headerTintColor: "#FFF",
                    headerStyle: {
                        backgroundColor: themes.background,
                    },
                    headerTitleStyle: {
                        color: '#FFF',
                    }
                }}
            />
        </Stack.Navigator>
    )
}