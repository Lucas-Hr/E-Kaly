import React from 'react';
import { useRef, useState} from 'react';
import { Animated, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import Colors from '../../../../assets/colors/Colors';
import SECTIONS from '../SECTIONS/SECTIONS';

const Indicator = ({indicatorRef}) => {
    return (
        <Animated.View
        style={[
            styles.underlineBar,
            { transform: [{ translateX: indicatorRef }] },
        ]}
        />
    );
}

const MenuList = () => {
    const [indicatorPosition, setIndicatorPosition] = useState(0);
    const indicatorRef = useRef(new Animated.Value(0)).current;

    const handleScroll = (event) => {
        const scrollOffset = event.nativeEvent.contentOffset.x;
        const itemWidth = Dimensions.get('window').width - 40 * 2;
        const indicatorWidth = 40;
        const maxIndicatorPosition = (SECTIONS.length - 1) * itemWidth;

        const newPosition = Math.min(maxIndicatorPosition, scrollOffset / itemWidth);
        setIndicatorPosition(newPosition);

        Animated.spring(indicatorRef, {
        toValue: newPosition,
        useNativeDriver: false,
        }).start();
    };
    
    return(
        <View style={styles.menuBar}>     
            <FlatList
                horizontal
                data={SECTIONS}
                contentContainerStyle={{columnGap: 14}}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                bounces={false}
                renderItem={({ item }) => (
                    <Text style={styles.itemBar}>{item.title}</Text>            
                )}  
            />

            <Indicator indicatorRef={indicatorRef}/>    
        </View>
    )
}

const styles = StyleSheet.create({
    menuBar: {
        top: 250,
        marginLeft: 40,
        position: 'absolute',
        width: Dimensions.get('window').width - 40*2,
    },
    itemBar: {
        color: Colors.black,
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    underlineBar: {
        width: 40,
        height: 4,
        backgroundColor: Colors.primary,
        bottom: -5,
        borderRadius: 2,
    },
});

export default MenuList;