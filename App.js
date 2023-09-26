import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  console.log('props of Header', props);
  return <Text>{props.title}</Text>
}
const MyProfile = () => {
  return <Text>MyProfile</Text>
}
const Division = () => {
  return <Text>Division</Text>
}
const FriendSection = () => {
  return <Text>FriendSection</Text>
}
const FriendList = () => {
  return (
    <View>
      <Text>미성</Text>
      <Text>송이</Text>
      <Text>재형</Text>
      <Text>승수</Text>
      <Text>채원</Text>
      <Text>혜정</Text>
      <Text>현석</Text>
      <Text>호진</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구"/>
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
