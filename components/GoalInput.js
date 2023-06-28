import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

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
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput 
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={ goalInputHandler }
                    value={ enteredGoalText }
                />
            
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel} color={"#f31282"}/>
                </View>
                <View style={styles.button}>
                    <Button title='Add Goal' onPress={ addGoalHandler } color={'#b180f0'}/>
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
        padding:16,
        // marginBottom: 24,
        // borderBottomWidth: 1,
        // borderBottomColor: '#cccccc',
        backgroundColor: '#311b6b'
    },
    image:{
        width: 100,
        height: 100,
        margin: 20
    },
    textInput:{
        borderWidth: 1,
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        borderRadius: 6,
        width:'100%',
        padding: 16
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