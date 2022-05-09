import { View, StyleSheet, Button, TouchableOpacity, Platform } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CallToAction = ({comp, index, goToHome}) => {
  
  return (
    <View style={{marginBottom: 20}} key={`${comp.component}${index}`}>
      <TouchableOpacity style={{...styles.button, flexDirection: 'row', justifyContent: 'center'}}>
      <MaterialCommunityIcons name="car" size={24} color="white" style={{marginTop: 5}}/>
        <Button
          title={comp.title}
          color={Platform.OS === 'ios' ? 'white' : 'black'}
          onPress={goToHome}
        ></Button>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    backgroundColor: "black",
    borderRadius: 5,
  }
});

export default CallToAction