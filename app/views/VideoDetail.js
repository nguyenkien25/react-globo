import React from 'react';
import { Text, View, WebView } from 'react-native';

export class VideoDetail extends React.Component {
    static navigationOptions = {
        header: null
    };

    render(){
        let tubeId = this.props.navigation.getParam('ytubeId', 'NO VIDEO');
        let tubeUrl = `https://www.youtube.com/embed/${tubeId}`;
        return(
            // <View style={{ paddingTop: 40 }}>
            //     <Text>{tubeUrl}</Text>
            // </View>
            <WebView
                style = {{marginTop: 20}}
                javaScriptEnabled={true}
                source={{uri: tubeUrl}}
            />
        );
    }
}