import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';

export class BlogDetail extends React.Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = { postLoaded: false};
    }

    componentDidMount(){
        let blogId = this.props.navigation.getParam('blogId', 'NO BLOG');
        return fetch(`http://demo.wp-api.org/wp-json/wp/v2/posts/${blogId}`)
        .then((respone) => respone.json())
        .then((responeJson) =>{
            this.setState({
                postLoaded: true,
                postTitle: responeJson.title.rendered,
                postImage: 'https://myglobomantics.files.wordpress.com/2018/05/team-3373638_1920.jpg',
                postContent: responeJson.content.rendered,
                postID: responeJson.id
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    goBack=()=>{
        this.props.navigation.navigate('BlogRT');
    }

    render(){
        const blogTagStyles = {
            img: {display: 'none'},
        };

        const blogClassStyles = {
            blTitle: {marginLeft: 'auto', marginRight: 'auto'},
            blContent: {marginLeft: 10, marginRight: 10},
            blBack: {marginLeft: 'auto', marginRight: 'auto', paddingBottom: 20}
        };

        let postDetails = `
            <div class="blTitle">
                <h1 >${this.state.postTitle}</h1>
            </div>
            <div class="blContent">
                <h1 >${this.state.postContent}</h1>
            </div>
            <div class="blBack">
                <a href=${this.state.postID} style="textDecorationLine: none; color: #000000">
                    <h2>GO BACK</h2>
                </a>
            </div>
        `;

        if (this.state.postLoaded){
            return (
                <View style={{paddingTop: 30}}>
                    <ScrollView>
                        <Image
                            style={{width: '100%', height: 200}}
                            source={{ uri: this.state.postImage }}
                        />
                        <HTML
                            html={postDetails}
                            tagsStyles={blogTagStyles}
                            classesStyles={blogClassStyles}
                            onLinkPress={()=> this.goBack()}
                        />
                    </ScrollView>
                </View>
            );
        }else{
            return (
                <View style={{paddingTop: 50, alignItems: 'center'}}>
                    <Text>LOADING</Text>
                </View>
            );
        }
        
    }
}