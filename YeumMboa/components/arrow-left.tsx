import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function ArrowLeftt() {
    const router = useRouter()
    return(
      <TouchableOpacity onPress={() => router.back()}>
        <FontAwesome name="arrow-left" style={styles.arrowleft} />
      </TouchableOpacity>
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
});