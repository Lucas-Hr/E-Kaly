import React, {useState} from 'react';
import {Text,View,TextInput,Image,StyleSheet ,StatusBar} from "react-native";

const MenuEkaly = () => {

  const [text, setText] = useState('');
  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  return (
      <View style={style.container}>
          <View style={style.header}>
                <View><Image source={require("../../../assets/images/MenuEkaly/Menu.png")}/></View>
                <View><Text style={{fontSize : 30}}>E-Kaly</Text></View>
                <View><Image source={require("../../../assets/images/MenuEkaly/Cuisinier.png")}/></View>
            </View>
          <Text style={style.Inputbebe}>
              <View style={style.Inputbe}>
                  <Image source={require('../../../assets/images/MenuEkaly/search.png')} resizeMode="cover" style={style.Search}/>
                  <View style={style.c0ntainer}>
                  <TextInput  
                    style={style.Input}
                    value={text} 
                    placeholder="Recherche"
                    onChangeText={handleTextChange} 
                    placeholderTextColor="rgba(0,0,0,0.5)"
                  />
                  </View>
              </View>
          </Text>


          <View style={style.FoodType}>
              <View style={style._Plat}>
                  <Text style={style.Text}>      Plat</Text>
              </View>

              <View style={style._Juice}>
              <Text style={style.Text}>     Accompagnement</Text>
              </View>

              <View style={style._Cake}>
              <Text style={style.Text}>      Dessert</Text>
              </View>
          </View>


          <Image source={require('../../../assets/images/MenuEkaly/cooking.png')} style={style.CokingImage} />
          <Image source={require('../../../assets/images/MenuEkaly/Juice.png')} style={style.JuiceImage} />
          <Image source={require('../../../assets/images/MenuEkaly/Cake.png')} style={style.CakeImage} />
          
          <View style={style.Resultat}>
              <View style={style.Inf0}>
                <Image source={require('../../../assets/images/MenuEkaly/bowl.png')} style={style.Bowl}/>
                <View style={style.Inf0Child}>
                  <Text style={style.Nom}>Toast aux crevettes</Text>
                    <Text style={style.Contenu}>Salade,Crevette,Viande de boeuf</Text>
                </View>
                <Text style={style.Prix}>10 000MGA</Text>
              </View>


              <View style={style.Inf0}>
                <Image source={require('../../../assets/images/MenuEkaly/Juice_red.png')} style={style.Juice_red}/>
                <View style={style.Inf0Child}>
                  <Text style={style.Nom}>Coca Cola </Text>
                    <Text style={style.Contenu}></Text>
                </View>
                <Text style={style.Prix}>5 000MGA</Text>
              </View>


            </View>
          {/* <View style={style.Footer}>
              <View style={style.FooterChild}>
                      <Image source={ require('../assets/img/junk.png')} style={style.Junk}/>
                      <Image source={ require('../assets/img/edit.png')} style={style.Edit}/>
                      <Image source={ require('../assets/img/add.png')} style={style.Add}/>
                      <Image source={ require('../assets/img/help.png')} style={style.Help}/>
              </View>
          </View> */}
      </View>
      );
}
const style = StyleSheet.create({
    container:{
      position: "relative",
      backgroundColor: "white",
      width:"100%",
      height:"100%",
      color:"black",
      marginVertical : 25,
    
    },
    header : {
      flexDirection : "row",
      justifyContent : "space-between",
      alignItems : 'center',
      marginVertical : 10,
      // paddingTop : StatusBar.currentHeight,
      marginHorizontal : 20
      
  },

    Arrow:{
      position:"absolute",
      height:30,
      width:25,
      left:30,
      top:11,
    },
    EKALY:{
      color: "black",
      position:"absolute",
      left:130, 
      top:5,  
      fontSize: 32,  
      fontFamily:'Open Sans',
    },
    // Hat:{
    //   position:"absolute",
    //   width: 30,
    //   height:30,
    //   top:11,
    //   right:30,
    // },
    Inputbebe:{
      position:"absolute",
      left:30,
      top:60,
    },
    Inputbe:{
      position: 'absolute',
      left:30,
      height: 40,
      borderRadius: 17,
      borderStyle: "solid",
      borderColor: "rgba(180,180,180,0.4)",
      borderWidth: 1,
      width:292,
    },
    Search:{
      position:"absolute",
      top: 9,
      left: 15,
      width: 22,
      height: 22,
    },
    Input: {
      height: 40,
      position:"absolute",
      left:50,
      width: 200,
      color: "black",
    },
    FoodType:{
      position:"absolute",
      top:105,
      left:30,
      flexDirection: 'row',
      justifyContent:'space-around',
      width:292,
      color:"black",
    },
    _Plat:{
      width:50,
      position:"relative",
      borderRadius: 5,
      borderStyle: "solid",
      borderColor: "rgba(0,0,0,0.5)",
      borderWidth: 1,
      height:22,
      justifyContent: "center",
    },
    _Cake:{
      position:"relative",
      borderRadius: 5,
      borderStyle: "solid",
      borderColor: "rgba(0,0,0,0.5)",
      borderWidth: 1,
      width:70,
      height:22,
      justifyContent: "center",
    },
    _Juice:{
      position:"relative",
      borderRadius: 5,
      borderStyle: "solid",
      borderColor: "rgba(0,0,0,0.5)",
      borderWidth: 1,
      width: 125,
      height:22,
      justifyContent: "center",
    },
    CokingImage:{
      position:'absolute',
      height:13,
      width:15,
      top:108,
      left:42,
    },
    JuiceImage:{
      height:15,
      width:10,
      position:'absolute',
      top:108,
      left:109,
    },
    CakeImage:{
      height:14.23,
      width:12,
      position:'absolute',
      top:108,
      left:250,
    },
    Text:{
      paddingLeft:4,
      color: 'black',
      fontSize:12,
      flex: 0,
      alignSelf: 'flex-start',
    },
    c0ntainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      width: 100,
      color: "black",
    },
    Footer:{
      position: 'absolute',
      width: "100%",
      height: 50,
      bottom: 30,
      
      borderColor: "#868383",
      borderTopWidth : 1,
      borderStyle: "solid",
    },
    FooterChild:{
      paddingTop:8,
      flex: 1,
      flexDirection: 'row',
      justifyContent : "space-evenly",
    },
    Junk:{
      height: 30,
      width: 27,
    },
    Add:{
      height: 29,
      width: 29,
    },
    Help:{
      height: 29,
      width: 29,
    },
    Edit:{
      height: 32,
      width: 28,
    },
    Juice_red:{
      height: 42,
      width:35,
      borderRadius: 5,
      marginLeft: 5 ,
    },
    Bowl:{
      height: 45,
      width:45,
      borderRadius: 10,
    },
    Inf0Child:{
      paddingRight:40,
      height:60,
    },
    Nom:{
      fontSize:12,
      fontWeight:'bold',
      color: "black",
      
    },
    Contenu:{
      color: "black",
      fontSize: 10,
      fontStyle:"italic",
      width:110,
      
    },
    Prix:{
      color: "black",
      marginTop:20,
      height:50,
      
      
    },
    Inf0:{
      paddingTop:10,
      width:292,
      marginLeft:30,
      borderBottomWidth:1,
      borderStyle: 'solid',
      borderBottomColor:'rgba(10,0,0,0.5)',
      color: "black",
      flexDirection: 'row',
      justifyContent : 'space-between',
      height:60,
      marginVertical : 5

    },
    Resultat:{
      marginTop:70,
    }
}
)
export default MenuEkaly ;