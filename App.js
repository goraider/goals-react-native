import { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  startAddGoalHnadler = () => {
    setModalIsVisible(true);
  }

  endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  addGoalHandler = ( enteredGoalText ) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    endAddGoalHandler();
  }

  deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal'
        color="#5e0acc"
        onPress={startAddGoalHnadler} />

      <GoalInput 
          visibleModal={ modalIsVisible }
          onAddGoal={ addGoalHandler }
          onCancel={ endAddGoalHandler }
      />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return(
              <GoalItem 
                text={ itemData.item.text }
                id={ itemData.item.id }
                onDeleteItem={ deleteGoalHandler }
              />
            );
          }}
        keyExtractor={(item, index) => {
          return item.id;
        }} 
        alwaysBounceVertical={false} />
      </View>


    </View>
  );
} 

const styles = StyleSheet.create({
  
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }

});


{/* <ScrollView alwaysBounceVertical={false}>
{ courseGoals.map((goal, index) => (
    <View style={styles.goalItem} key={index}>
      <Text style={styles.goalText}>{goal}</Text>
    </View>
))}  
</ScrollView> */}