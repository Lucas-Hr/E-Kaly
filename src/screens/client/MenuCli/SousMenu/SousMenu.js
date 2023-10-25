import React from 'react';
import { Animated, Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../../assets/colors/Colors';

const SousMenu = (props) => {
    const {section} = props;

    return(
        <SafeAreaView style={styles.containerList}>      
        <Animated.FlatList
            horizontal
            data={section}
            keyExtractor={(item) => item.title}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            renderItem={({ item }) => (
            <View>
                <FlatList
                data={item.data}
                contentContainerStyle={{rowGap: 15}}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.iplatList}>
                    <View>
                        <Image style={styles.platImg}
                        source={item.img}
                        resizeMode='cover' 
                        />
                    </View>
                    <View style={styles.platInfo}>
                        <Text style={styles.platTitle}>{item.title}</Text>
                        <Text style={styles.platIngredients}>{item.ingredients}</Text>
                        <Text style={styles.platPrice}>{item.price.toString()}K MGA</Text>
                        <View style={styles.platFoot}>
                        <View style={styles.platStar}>
                            <FontAwesome style={styles.starIcon} name='star' />
                            <Text style={styles.nbrStar}>{item.star.toString()}</Text>
                        </View>
                        <View style={styles.platControl}>
                            <FontAwesome style={styles.plusminusIcon} name='plus-square' />
                            <Text style={styles.nbrPlat}>{item.quantity.toString()}</Text>
                            <FontAwesome style={styles.plusminusIcon} name='minus-square' />
                        </View>
                        </View>  
                    </View>
                    </View>
                )}          
                /> 
            </View>    
            )}
        />       
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerList: {
        flex: 4,
        marginTop: 50,
        marginLeft: 20,
        width: Dimensions.get('window').width - 20*2,
    },
    iplatList: {
        height: 120,
        width: Dimensions.get('window').width - 20*2,
        flexDirection: 'row',
        borderWidth: 0.25,
        borderColor: Colors.gray,
        borderRadius: 10,
    },
    platImg: {
        margin: 10,
        width: 100,
        height: 100,
    },
    platInfo: {
        marginTop: 10,
    },
    platTitle: { 
        fontSize: 13,
        fontWeight: 'bold',
    },
    platIngredients: {
        color: Colors.gray,
        fontSize: 12,
        fontStyle: 'italic',
    },
    platPrice: {
        marginTop: 5,
        color: Colors.black,
        fontSize: 14,
        fontWeight: 'bold',
    },
    platFoot: {
        flexDirection: 'row',
        marginTop: 10,
        width: '62%',
        justifyContent: 'space-between',
    },
    platStar: {
        flexDirection: 'row',
    },
    starIcon: {
        paddingTop: 4,
        paddingRight: 10,
        color: Colors.primary,
        fontSize: 15,
    },
    platControl: {
        flexDirection: 'row',
    },
    plusminusIcon: {
        paddingTop: 5,
        color: Colors.primary,
        fontSize: 15,
    },
    nbrPlat: {
        paddingLeft: 10,
        paddingRight: 10,
    },
});

export default SousMenu;