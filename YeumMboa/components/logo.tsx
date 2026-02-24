import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { withLayoutContext } from 'expo-router';

export default function Logo() {
    return (
      <View style={styles.homesection}>
        <View style={styles.logo}>
          <Ionicons name="book" style={styles.book} />
          <Text>
            <Text style={styles.title}>YeumMboa</Text>
            <br/>
            <Text style={styles.subtitle}>Découvre le cameroun, en jouant</Text>
          </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  title : {
    fontSize:20,
    color: "#c9131c",
  },
  book : {
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#c9131c",
    color: 'white',
    fontSize:30,
  },
  homesection: {
    marginTop:20,
  },
  logo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 20,
    paddingRight: 10,
  },
  subtitle: {
    color: "#007a5e",
  },
});