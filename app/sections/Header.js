import React from 'react';
import { StyleSheet, Text, View, Platform, Image, AsyncStorage, Alert } from 'react-native';

export class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            loggedUser: false
        };
    }

    toggleUser = ()=>{
        // this.setState(previousState => {
        //     return { isLoggedIn: !previousState.isLoggedIn };
        // });
        if (this.state.isLoggedIn){
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                });
                Alert.alert('User logged out');
            });
        }else{
            this.props.navigate('LoginRT');
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if (result==='none'){
                console.log('NONE');
            }else if (result ===null){
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('Set user to NONE');
                });
            }else{
                console.log('user logged');
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                });
            }
        });
    }

    render() {
        // let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message;
        return(
            <View style={styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    source={ require('./img/Globo_logo_REV.png')}
                />
                <Text 
                    style={styles.headText}
                    onPress={this.toggleUser}>{display}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headText: {
        // backgroundColor: 'blue',
        textAlign: 'right',
        marginLeft: 10,
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1
    },
    headStyle:{
        paddingTop: 30,
        // paddingBottom: 10,
        paddingRight: 10,
        backgroundColor: Platform.OS === 'android'? 'red' : '#35605a',
        // width: 100

        // ...Platform.select({
        //     ios: {
        //         height: 300
        //     },
        //     android: {
        //         height: 250
        //     }
        // }),
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000' 
    },
    logoStyle:{
        width: 40,
        height: 40
    }
});