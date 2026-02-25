import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { withLayoutContext } from 'expo-router';
import { colors } from '../theme/color';

export default function Logo() {
    return (
      <View style={styles.homesection}>
        <View style={styles.logo}>
          <MaterialIcons name="menu-book" style={styles.book} />
          <Text>
            <Text style={styles.title}>YeumMboa</Text>
            <br/>
            <Text style={styles.subtitle}>Redécouvre le cameroun</Text>
          </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  title : {
    fontSize:20,
    color: colors["red"],
    fontFamily: 'PlusJakartaSans-Bold',
  },
  book : {
    marginRight:8,
    borderRadius: 10,
    padding: 10,
    backgroundColor:colors["red"],
    color: 'white',
    fontSize:30,
  },
  homesection: {
    marginTop:20,
  },
  logo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft:15,
    paddingRight: 10,
  },
  subtitle: {
    color:colors["green"],
    fontSize: 11,
    fontFamily: 'PlusJakartaSans-Bold',
  },
});