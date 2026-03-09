import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { colors } from '../theme/color';

export default function Logo() {
    return (
      <View style={styles.homesection}>
        <View style={styles.logo}>
        <FontAwesome5 name="globe-africa" style={styles.globe} />
          <Text>
            <Text style={styles.title}>YeumMboa</Text>
            {"\n"}
            <Text style={styles.subtitle}>Découvre le Cameroun</Text>
          </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  title : {
    fontSize:20,
    color: colors["red"],
    fontFamily: 'Montserrat-Bold',
  },
  globe: {
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
    fontFamily: 'Montserrat-Bold',
  },
});