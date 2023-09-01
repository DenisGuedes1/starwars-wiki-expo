import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import {BottomBarConteiner, BarItem} from './styles'
import { CustomText } from '../../atoms';
import { themes } from '../../../styles';
{/* <Ionicons name={routeIcon[route.name]} size={size} color={color} /> */}
const routeIcon ={
    "Home": "home-outline",
     "Search": "search-outline",
     "Favorites": "heart-outline"
 }

export const BottomBar =({ state, descriptors, navigation }) => {
  return (
    <BottomBarConteiner>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BarItem
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          
          >
            <Ionicons name={routeIcon[route.name]} 
            size={ themes.metrics.px(20)}
            color={isFocused ? themes.colors.red : themes.colors.white}
            
            /> 
            <CustomText fontFamily="semiBold" size={10} color={isFocused ? 'red' : 'white'}
          >
              {label}
            </CustomText>
          </BarItem>
        );
      })}
    </BottomBarConteiner>
  );
}



// <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
//   {...}
// </Tab.Navigator>