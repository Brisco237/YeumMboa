import { View, Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import Logo from '../../components/logo';
import Section1 from '../../components/section1';
import SectionCategory from '../../components/section-category';   
import Menu from '../../components/menu'     
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useFonts } from 'expo-font';
import Trait from '../../components/trait';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
    const router = useRouter();
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
        <SafeAreaView  style={styles.container}>
            <View style={styles.header}>
                <Logo />
                <TouchableOpacity onPress={() => router.push('/info-screen')}>
                    <FontAwesome5 name="user-cog" style={styles.infoicon} />
                </TouchableOpacity>
            </View>
            <Trait />
            <ScrollView  showsVerticalScrollIndicator={false}>
                <View style={styles.containercolor}>
                    <Section1 />
                    <SectionCategory />
                    <Trait />
                </View>
            </ScrollView>
            <View>
                <Menu />
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
  containercolor:{
    backgroundColor: '#f8f6f6',
  },
  container: {
    flex:1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop:15,
  },
  infoicon :{
    fontSize:18,
    marginRight:20,
  }, 
});
