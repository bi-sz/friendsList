import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = (props) => {
  console.log('props of Header', props);
  return <Text>{props.title}</Text>
}
const MyProfile = () => {
  return <Profile name="비" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/bi.jpg" profileSize={40} />
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
        source={{uri: props.uri,
        }}
        style={{
          width: props.profileSize,
          height: props.profileSize,
        }}
      
      />
      <Text>{props.name}</Text>
    </View>
  )
}
const FriendList = () => {
  return (
    <View>
      <Profile name="녜냥" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/Neow.jpg" profileSize={30} />
      <Profile name="미성" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/Miseong.png" profileSize={30} />
      <Profile name="박재형" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/Jaehyung.png" profileSize={30}/>
      <Profile name="박승수" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/seungsoo.jpg" profileSize={30}/>
      <Profile name="송츄" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/sonhChu.png" profileSize={30}/>
      <Profile name="정민" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/Jeongmin.jpeg" profileSize={30}/>
      <Profile name="채붕이" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/Chaewon.jpg" profileSize={30}/>
      <Profile name="호진" uri="https://raw.githubusercontent.com/bi-sz/friendsList/master/image/Hojin.jpg" profileSize={30}/>
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
