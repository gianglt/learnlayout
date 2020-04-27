import * as React from 'react';
import { Button, View, Text, ListView, StyleSheet,Image,FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem, SearchBar } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';


export default class  DetailScreen extends React.Component  {  

    goHome = (item) => {
        const email = item.email;
        console.log("Get out from item: " + item.email);
        this.props.navigation.navigate('ListPhotoPaging');
      };
      
    render() {
        const item = this.props.route.params.item;
        let name = "";
        let img = "";
        let email = "";
        if (item != null) {
            name = item.name.first + " " + item.name.last;
            img = item.picture.medium;
            email = item.email;
        }
      return (
        <View style={styles.container}>
          <Text style={styles.text}>name: {name}</Text>
          <Image
            style={{width: 128, height: 128}}
            source={{uri: img}}
          />
          <Text  style={styles.text}>{email}</Text>
          
          <Button title="Home" 
            onPress={()=>this.goHome(item)} 
          />
        </View>
      );

  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 16,
    }
  });