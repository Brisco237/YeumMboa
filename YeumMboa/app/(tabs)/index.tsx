import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from '../../components/logo';
import Section1 from '../../components/section1';
import SectionCategory from '../../components/section-category';   
import Menu from '../../components/menu'     
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import Trait from '../../components/trait';


export default function HomeScreen() {
    const [fontsLoaded] = useFonts({
        'PlusJakartaSans-Bold': require('../../assets/fonts/PlusJakartaSans-Bold.ttf'),
        'PlusJakartaSans-Regular': require('../../assets/fonts/PlusJakartaSans-Regular.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null; 
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo />
                <FontAwesome name="user-circle-o" style={styles.usericon} />
            </View>
            <Trait />
            <ScrollView>
                <View style={styles.containercolor}>
                    <Section1 />
                    <SectionCategory />
                    <Trait />
                </View>
            </ScrollView>
            <View>
                <Menu />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  containercolor:{
    backgroundColor: '#f8f6f6',
  },
  container: {
    height:'100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  usericon :{
    marginTop :30,
    fontSize: 20,
    marginRight:20,
    fontWeight: 'bold',
    color:'gray'
  }, 
});
