import * as React from 'react';
import { Button, View, Text, ListView, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../constants/Controls.js';

const profileImg = "https://reactnativemaster.com/wp-content/uploads/2019/11/React-native-master-logo-only.png"
export default class ListButtons extends React.Component {
    render() {
        const width = 400;
        return (

            <View>
                <View style={{flex: 1, flexDirection: 'row', width: width}}>
                    <View style={{width:'48%', flexDirection: 'column'}}>
                        <View style={styles.card}>
                            <View style={styles.header}>
                                <Image style={styles.profileImg} source={{ uri: profileImg }} />
                                <Text style={{ fontWeight: "bold", fontSize: 18 }}>React Native Master</Text>
                            </View>
                            
                        </View>
                    </View>
                    <View style={{width:'48%',lexDirection: 'column'}}>
                        <View style={styles.card}>
                            <View style={styles.header}>
                                <Image style={styles.profileImg} source={{ uri: profileImg }} />
                                <Text style={{ fontWeight: "bold", fontSize: 18 }}>React Native Master</Text>
                            </View>
                            
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


