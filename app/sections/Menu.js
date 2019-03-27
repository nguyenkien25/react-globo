import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert, Button } from 'react-native';

export class Menu extends React.Component{
    onPress = ()=>{
        Alert.alert('You tapped the button!');
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity
                        style={styles.buttonStyles}
                        onPress={()=>this.props.navigate('LessonsRT')}>
                        <Text style={styles.buttonText}> 
                            LESSONS
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyles}
                        onPress={()=>this.props.navigate('RegisterRT')}>
                        <Text style={styles.buttonText}> 
                            REGISTER
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity
                        style={styles.buttonStyles}
                        onPress={()=>this.props.navigate('BlogRT')}>
                        <Text style={styles.buttonText}> 
                            BLOG
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyles}
                        onPress={()=>this.props.navigate('ContactRT')}>
                        <Text style={styles.buttonText}> 
                            CONTACT
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity
                        style={styles.buttonStyles}
                        onPress={()=>this.props.navigate('QuizRT')}>
                        <Text style={styles.buttonText}> 
                            QUIZ
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyles}
                        onPress={()=>this.props.navigate('AboutRT')}>
                        <Text style={styles.buttonText}> 
                            ABOUT
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.buttonRow}>
                    <Button
                        style={styles.buttonStyles}
                        title="QUIZ"
                        onPress={this.onPress}>
                    </Button>
                    <Button
                        style={styles.buttonStyles}
                        title="ABOUT"
                        onPress={this.onPress}>
                    </Button>
                </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 6, 
        backgroundColor: 'blue'
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1
    },
    buttonStyles:{
        backgroundColor: '#35605a',
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderRightWidth: 1,
        borderLeftWidth: 1
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18
    }
});