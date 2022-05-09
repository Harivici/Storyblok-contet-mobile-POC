import { View, StyleSheet, Image } from "react-native";

const FeatureImage = ({comp, index}) => {
  return (
    <View style={{justifyContent: 'center', flexDirection: 'row'}} key={`${comp.component}${index}`}>
      {comp.image && (
        <Image
          style={styles.logo}
          source={{ uri: comp.image.filename }}
        ></Image>
      )}
      {/* <Text style={{textAlign: 'center'}}>{comp.image.title}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 380,
    height: 230,
    marginTop: 20,
    marginBottom: 20,
  }
});

export default FeatureImage;