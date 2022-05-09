import React, { useState, useEffect } from "react";
import { Text, ScrollView, View, StyleSheet, Linking } from "react-native";
import StoryblokClient from 'storyblok-js-client';
// import storyblok from "../utilities/storyblok";
import useStoryblok from "../utilities/storyblok-hook";
// import Editable from "../utilities/editable";
import BodyContent from "../taxi_sb_components/bodyContent";
import CallToAction from "../taxi_sb_components/callToAction";
import FeatureImage from "../taxi_sb_components/featureImage";
import MobileExternalLink from "../taxi_sb_components/mobileExternalLink";
import MobileTelephone from "../taxi_sb_components/mobileTelephone";

const Taxi = ({ navigation }) => {
  const [story, setStory] = useState({});
  useStoryblok(story, setStory);
  
  useEffect(() => navigation.addListener('focus', () => {
    const fetchPost = async () => {
      const storyblok = new StoryblokClient({
        accessToken: 'qZyk4oyPYg3CKrTQQAALvgtt'})
      
      const resp = await storyblok.get("cdn/stories/channels/mobile-app/pages/plan/taxi-or-ride-share", {
        version: "draft",
      });
      setStory(resp.data.story);
    };
    fetchPost();
  }))
    

  const goToHome = () => {
    navigation.navigate("home");
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return story.content ? (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{justifyContent: 'flex-start'}}>
      <Text style={{...styles.titleText, marginBottom: 20}}>{story.content.header}</Text>
      
      {story.content.body.map((comp, index) => {
        const compProps = {comp, index}
        if (comp.component === 'mobile_body_content') {
          return <BodyContent {...compProps} />
        }
        if (comp.component === 'mobile_feature_image') {
          return <FeatureImage {...compProps} />
        }
        if (comp.component === 'mobile_call_to_action') {
          return <CallToAction goToHome={goToHome} {...compProps} />
        }
        if (comp.component === 'mobile_telephone_link') {
          return  <MobileTelephone {...compProps} openLink={openLink} />
        }
        if (comp.component === 'mobile_external_link') {
          return  <MobileExternalLink {...compProps} openLink={openLink} />
        }
      })}
      </View>
    </ScrollView>
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