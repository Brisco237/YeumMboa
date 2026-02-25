import { View, Text, StyleSheet } from 'react-native';
import Logo from '../../components/logo';
import Section1 from '../../components/section1';
import SectionCategory from '../../components/section-category';        
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';


export default function HomeScreen() {
    const [fontsLoaded] = useFonts({
        'PlusJakartaSans-Bold': require('../../assets/fonts/PlusJakartaSans-Bold.ttf'),
        'PlusJakartaSans-Regular': require('../../assets/fonts/PlusJakartaSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null; 
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo />
                <FontAwesome5 name="user-circle" style={styles.usericon} />
            </View>
            <View>
                <Section1 />
            </View>
            <View>
                <SectionCategory />
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
    fontSize: 25,
    marginRight:20,
    fontWeight: 'bold',
  }, 
});
