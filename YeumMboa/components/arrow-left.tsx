import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function ArrowLeft() {
    const router = useRouter()
    return(
      <TouchableOpacity onPress={() => router.back()}>
        <FontAwesome name="arrow-left" style={styles.arrowleft} />
      </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
  arrowleft:{
    fontSize:14,
    backgroundColor:'#f3eaea',
    borderRadius:7,
    padding:10,
  },
});