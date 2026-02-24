import { View, Text, StyleSheet } from 'react-native';
import Logo from '../../components/logo';
import { FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo />
                <FontAwesome5 name="user" style={styles.usericon}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#f8f6f6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  usericon :{
    marginTop :30,
    fontSize: 20,
    marginRight: 30,
  }, 
});
