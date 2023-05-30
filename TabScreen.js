import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import ImageGallery from './ImageGallery';

const TabScreen = createMaterialTopTabNavigator(
    {
        Auto: () => <ImageGallery category="авто" />,
        Architecture: () => <ImageGallery category="архитектура" />,
        // Добавьте остальные категории здесь
    },
    {
        tabBarOptions: {
            scrollEnabled: true,
        },
    }
);

export default createAppContainer(TabScreen);