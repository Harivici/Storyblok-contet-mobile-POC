import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, Button, Linking, TouchableOpacity, ScrollView } from "react-native";
import StoryblokClient from 'storyblok-js-client';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// import storyblok from "../utilities/storyblok";
import useStoryblok from "../utilities/storyblok-hook";
// import Editable from "../utilities/editable";


const Taxi = ({ navigation }) => {
  const [story, setStory] = useState({});
  useStoryblok(story, setStory);

  useEffect(() => {
    const fetchPost = async () => {
      const storyblok = new StoryblokClient({
        accessToken: 'qZyk4oyPYg3CKrTQQAALvgtt'})
      
      const resp = await storyblok.get("cdn/stories/channels/mobile-app/pages/plan/taxi-or-ride-share", {
        version: "draft",
      });
      console.log(resp.data.story)
      if (Object.keys(story).length === 0) { 
        setStory(resp.data.story);
      }
    };
    fetchPost();
    () => {
      setStory({});
      console.log('unmount the comp')
    }
  }, []);

  const goToHome = () => {
    navigation.navigate("home");
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return story.content ? (
    <View style={styles.container}>
      <Text style={{...styles.titleText, marginBottom: 20}}>{story.content.header}</Text>
      
      {story.content.body.map(comp => {
        if (comp.component === 'mobile_body_content') {
          return (<View key={comp.sub_title}>
            <Text style={styles.subText}>{comp.sub_title}</Text>
            <Text>{comp.body_content}</Text>
            </View>)
        }
        if (comp.component === 'mobile_feature_image') {
          return (<View style={{justifyContent: 'center', flexDirection: 'row'}} key={comp.component}>
            {comp.image && (
              <Image
                style={styles.logo}
                source={{ uri: comp.image.filename }}
              ></Image>
            )}
            {/* <Text style={{textAlign: 'center'}}>{comp.image.title}</Text> */}
            </View>)
        }
        if (comp.component === 'mobile_call_to_action') {
          return (<View style={{marginBottom: 20}} key={comp.component}>
            
              <TouchableOpacity style={{...styles.button, flexDirection: 'row', justifyContent: 'center'}}>
              <MaterialCommunityIcons name="car" size={24} color="white" style={{marginTop: 5}}/>
                <Button
                  title={comp.name}
                  color="white"
                  onPress={goToHome}
                ></Button>
              </TouchableOpacity>
            </View>)
      }
      if (comp.component === 'mobile_telephone_link') {
        return  (<View key={comp.component}>
          <Text style={{marginBottom:2}}>{comp.title}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8}}>
            <Text onPress = {() => openLink(`tel:${comp.phone_number}`)}>{comp.phone_number}</Text>
            <Entypo name="phone" size={24} color="black" />
          </View>
          <View
            style={{
              borderBottomColor: '#AFAFAF',
                borderBottomWidth: 1,
            }}
          />
        </View>)
      }
      if (comp.component === 'mobile_external_link') {
        return  (<View key={comp.component}>
          <Text style={{marginBottom: 2, marginTop: 10}}>{comp.title}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8}}><Text onPress = {() => openLink(comp.website_url.url)}>{comp.website_url.url}</Text> 
          <MaterialCommunityIcons name="web" size={24} color="black" /></View>
          <View
            style={{
              borderBottomColor: '#AFAFAF',
                borderBottomWidth: 1,
                marginBottom: 10
            }}
          />
        </View>)
      }
      
      })}
    </View>
  ) : (
    <View>
      <Text>Loading..</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  horizontal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    margin: 10,
    backgroundColor: "black",
    borderRadius: 5,
  },
  logo: {
    width: 380,
    height: 230,
    marginTop: 20,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default Taxi;