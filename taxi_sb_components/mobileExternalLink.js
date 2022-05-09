import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MobileExternalLink = ({comp, index, openLink}) => {
  return  (
    <View key={`${comp.component}${index}`}>
      <Text style={{marginBottom: 2, marginTop: 10}}>{comp.title}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8}}><Text onPress = {() => openLink(comp.website_url.url)}>{comp.website_url.url}</Text> 
      <MaterialCommunityIcons name="web" size={24} color="black" /></View>
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
export default MobileExternalLink