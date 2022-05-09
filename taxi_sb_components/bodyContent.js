import { Text, View, StyleSheet } from "react-native";

const BodyContent = ({comp, index}) => {
  return (
    <View key={`${comp.component}${index}`}>
    <Text style={styles.subText}>{comp.sub_title}</Text>
    <Text>{comp.body_content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default BodyContent