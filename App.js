import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal ] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const goalInputHandler = (enteredText)=> {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal])
  }

  

  return (
    <View style = {styles.screen}>
      <View style={styles.container}>
        <TextInput placeholder=' Course Goal' style={styles.input} onChangeText={goalInputHandler} value = {enteredGoal}/>
        <Button title='ADD' onPress= {addGoalHandler}/>
      </View>

      <ScrollView>
          {courseGoals.map( (goal, i) => { 
            return(
            <View key={i} style= {styles.listItem}>
              <Text >{goal}</Text>
              </View>
            )})
          }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    padding: 50
  },
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignContent: 'center'
  },
  input: {
    width: 200,
    borderColor:'black', 
    borderBottomWidth: 1, 
    padding: 10
  },
  listItem: {
    padding: 10,
    backgroundColor: 'grey',
    margin: 4,
    borderColor: 'black',
    borderWidth: 1
  },  
});
