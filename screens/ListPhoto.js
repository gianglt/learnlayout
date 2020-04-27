import * as React from 'react';
import { Button, View, Text, ListView, StyleSheet,Image,FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem, SearchBar } from 'react-native-elements';

export default class ListPhoto extends React.Component {
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
                leftAvatar={{source:{uri:item.thumbnailUrl}}}
                title={item.title}
                subtitle={item.thumbnailUrl}
                
            />
        )
        
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
    componentDidMount()
    {
        this.setState({ isLoading: true });
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ 
                    data: responseJson
                });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false })
            });

    }    
    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={({item}) => this.renderNativeItem(item)}
                keyExtractor={item => item.title}
                ItemSeparatorComponent={this.renderSeparator}          
            />
        );
    }


}

