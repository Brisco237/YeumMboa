import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function ArrowLeftt() {
    const router = useRouter()
    return(
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.push('/(tabs)')}>
                <AntDesign name="arrow-left" style={styles.arrowleft} />
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
  arrowleft:{
    fontSize:18,
    marginTop:5,
    backgroundColor:'#f3eaea',
    borderRadius:'50%',
    padding:10,
  },
  header: {
    marginTop:20,
    marginLeft:20,
    marginBottom:10,
    flexDirection:'row',
    gap:50,
  },
});