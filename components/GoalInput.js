import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    }

    addGoalHandler = () => {
        if(enteredGoalText.trim() != ''){            
            props.onAddGoal(enteredGoalText);
            setEnteredGoalText('');
        }
    }
    return (
        <Modal visible={props.visibleModal} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={ goalInputHandler }
                    value={ enteredGoalText }
                />
            
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Add Goal' onPress={ addGoalHandler }/>
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel}/>
                </View>
            </View>
            </View>
        </Modal>

    );
}


const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: 24,
        padding:16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput:{
        borderWidth: 1,
        borderColor:'#cccccc',
        width:'100%',
        padding: 8
    },
    buttonContainer:{
        marginTop: 16,
        flexDirection: 'row'
    },
    button:{
        width: 100,
        marginHorizontal: 8
    }
});

export default GoalInput;