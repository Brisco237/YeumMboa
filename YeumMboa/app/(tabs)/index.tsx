import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from '../../components/logo';
import Section1 from '../../components/section1';
import SectionCategory from '../../components/section-category';   
import Menu from '../../components/menu'     
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
            <View
                    style={{
                    borderBottomColor: '#d9d9d9',
                    borderBottomWidth: 1,
                    width: '100%',     
                    marginTop:10,
                }}/>
            <ScrollView>
                <View style={styles.containercolor}>
                    <Section1 />
                    <SectionCategory />
                    <View
                        style={{
                        borderBottomColor: '#d9d9d9',
                        borderBottomWidth: 1,
                        width: '100%',     
                        marginTop:50,
                    }}/>
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
    fontSize: 25,
    marginRight:20,
    fontWeight: 'bold',
    color:'black',
  }, 
});
