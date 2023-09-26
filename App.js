import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  console.log('props of Header', props);
  return <Profile name="비" uri="" />
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
const Profile = (props) => {
  return (
    <View style={{flexDirection: "row"}}>
      <Image 
        source={{uri: props.uri}}>
        style={{
          width: 30,
          heigh: 30,
        }}

      </Image>
      <Text>{props.name}</Text>
    </View>
  )
}

const FriendList = () => {
  return (
    <View>
      <Profile name="녜냥" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/Neow.jpg" />
      <Profile name="미성" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/Miseong.png" />
      <Profile name="박재형" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/Jaehyung.png" />
      <Profile name="박승수" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/seungsoo.jpg" />
      <Profile name="송츄" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/sonhChu.png" />
      <Profile name="정민" uri="" />
      <Profile name="채붕이" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/Chaewon.jpg" />
      <Profile name="호진" uri="" />
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
