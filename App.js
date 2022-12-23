import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  // const [name, setName] = useState ('sain');
  // const [fname, setfName] = useState ('Luffy');
  // const [age, setAge] = useState ('24');
   const [people, setPeople] = useState ([
    { name: 'sain', id: '1'},
    { name: 'lester', id: '2'},
    { name: 'mar', id: '3'},
    { name: 'Lomocso', id: '4'},
    { name: 'fuellas', id: '5'},
    { name: 'fuella', id: '6'},
    { name: 'fuell', id: '7'},
    { name: 'fuel', id: '8'},
    { name: 'fue', id: '9'},
  ]);

  const pressHandler = (id) => {
      console.log(id);
      setPeople((prevPeople) => {
        return prevPeople.filter(person => person.id != id)
      })
    }
  
  // const clickHandler = () => {
  //   setName('Sain Fuellas 27 years old')
  // }


  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
          
        )}
      />

     {/* <ScrollView> 
      { people.map((item) => {
        return(
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
      </ScrollView> */}
      {/* <View style={styles.header}>
        <Text styles={styles.boldText}>My name is {name}</Text>
        <Text></Text>
      </View>
      //   <View style={styles.body}>
      //     <Text>Mobile Develoment Intern</Text>
      // </View>
      // <View style={styles.buttonContainer}>
      //     <Button title='Update state' onPress={clickHandler} />
      //   </View>
        
        
      //   <Text>Enter Name: </Text>
      //   <TextInput */}
      {/* //     multiline
      //     style={styles.input}
      //     placeholder='e.g orayt'
      //     onChangeText={(val) => setfName(val)} />

      //   <Text>Enter age: </Text>
      //   <TextInput 
      //    // keyboardType='numeric'
      //     style={styles.input}
      //     placeholder='e.g 100'
      //     onChangeText={(val) => setAge(val)} />


      //  <Text>His name is {fname} and his age is {age}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'red',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }
  // header: {
  //   backgroundColor: 'red',
  //   padding: 20,
  // },
  // boldText: {
  //   fontWeight: 'bold',
  // },
  // body: {
  //   backgroundColor: 'yellow',
  //   padding: 20,
  // },
  // buttonContainer: {
  //   marginTop: 20,
  // },
  // input: {
  //   borderWidth: 1,
  //   borderColor: 'a777',
  //   padding: 8,
  //   margin: 10,
  //   width: 200,
  // }
});
