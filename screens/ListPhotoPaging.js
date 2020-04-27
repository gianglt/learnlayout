import * as React from 'react';
import { Button, View, Text, ListView, StyleSheet,Image,FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem, SearchBar } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';


import DetailScreen from './DetailScreen';


export default class ListPhotoPaging extends React.Component {
    constructor(props) {
        super(props);        
        this.state = {
            data:[],
            isLoading:false,
        };
        this.arrayholder = [];
        
    }    

    renderNativeItem  = (item) => {
        return (
            <ListItem
                leftAvatar={{source:{uri:item.picture.thumbnail}}}
                title={item.name.first}
                subtitle={item.email}
                onPress={()=> this.onPressItem(item)}
                
            />
        )
        
    }

    onPressItem = (item) => {
        const email = item.email;
        console.log("onPress email with item: " + item.email);
        this.props.navigation.navigate('DetailScreen', {item: item})
      }

    renderSeparator = () => {
        return (    
          <View    
            style={{    
              height: 1,    
              width: '86%',    
              backgroundColor: '#CED0CE',    
              marginLeft: '14%',    
            }}
          />
        );    
      };    


    getremoteData = () => {
        const url = "https://randomuser.me/api/?seed=1&page=1&results=10";
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ 
                    data: responseJson.results
                });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false })
            });

    }  

    componentDidMount()
    {
        this.setState({ isLoading: true });
        this.getremoteData();
    }    

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => this.renderNativeItem(item)}
                    keyExtractor={item => item.email}
                    ItemSeparatorComponent={this.renderSeparator}
                />

                <Button
                    title="Go Detail"
                    onPress={() => this.props.navigation.navigate('DetailScreen', { source: "ListPhotoPaging" })}
                />
            </View>          
        );
    }


}

const Stack = createStackNavigator();
  

<Stack.Navigator
    initialRouteName="ListPhotoPaging">
    <Stack.Screen name="ListPhotoPaging" component={ListPhotoPaging} />
    <Stack.Screen
        name="DetailScreen"
        component={DetailScreen} 
        initialParams={{item:{}}}/>
</Stack.Navigator>
