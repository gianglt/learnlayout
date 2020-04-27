
import * as React from 'react';
import { StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: 'center',
      paddingTop: 2,
      backgroundColor: '#ecf0f1',
      padding: 8,
      alignItems:"center"
    },
    card:{
      height:150,
      width:"80%",
      backgroundColor:"blue",
      borderRadius:15,
      elevation:10,
      padding:10,
      alignItems: 'center',
      alignSelf:"center",
      shadowColor:"gray",
      shadowRadius:10,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
    },
    profileImg:{
      width:30,
      height:30,
      borderRadius:50,
      marginRight:10,
    },
    header: {
      flexDirection:"row",
    }
  });

  export default styles;