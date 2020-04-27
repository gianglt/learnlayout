import * as React from 'react';
import { Button, View, Text, ListView, StyleSheet,Image,FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class ListPhotoListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 }),
            isLoading:false
        }
    }

    render() {
        return (
            <ScrollView>
                <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={(row) =>
                        <View>
                            <Image source={{uri:row.thumbnailUrl}} style={{width:100,height:100,resizeMode : 'stretch'}}/>
                            <Text>{row.title}</Text>
                        </View>
                    }
                />
            </ScrollView>
        );
    }

    componentDidMount()
    {
        this.setState({ isLoading: true });
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ 
                    dataSource: this.state.dataSource.cloneWithRows(json),
                })
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false })
            });

    }
}

