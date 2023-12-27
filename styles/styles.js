
import { StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      // backgroundColor: '#343541',
    },
    homeContent: {
      marginTop: 20,
    },
    inputstyle: {
      color: 'red',
      padding: 16,
      fontSize: 16,
    },
    contentView: {
      flex: 1,
    },
    buttonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginVertical: 20,
    },
    subHeader: {
      backgroundColor: '#2089dc',
      color: 'white',
      textAlign: 'center',
      paddingVertical: 5,
      marginBottom: 10,
    },
    buttonStyle: {
      backgroundColor: 'black',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 30,
    },
  });
  

  export default styles;