// modules
import React from 'react';
import { View, StyleSheet } from 'react-native';

const WhiteBackgroundScreen = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default WhiteBackgroundScreen;