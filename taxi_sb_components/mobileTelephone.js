import { Text, View, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';

const MobileTelephone = ({comp, index, openLink}) => {
  return  (
    <View key={`${comp.component}${index}`}>
      <Text style={{marginBottom:2}}>{comp.title}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8}}>
        <Text onPress = {() => openLink(`tel:${comp.phone_number}`)}>{comp.phone_number}</Text>
        <Entypo name="phone" size={24} color="black" />
      </View>
      <View
        style={styles.horizontalLine}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: '#AFAFAF',
    borderBottomWidth: 1,
    marginBottom: 10
  }
});



export default MobileTelephone;