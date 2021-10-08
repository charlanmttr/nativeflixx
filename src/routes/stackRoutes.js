import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../pages/Home'
import Detail from '../pages/Detail'

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
        </Stack.Navigator>
    )
}