import React from 'react';
import { Text, View, FlatList } from 'react-native';
import HTML from 'react-native-render-html';

export class Blog extends React.Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = { blogLoaded: false};
    }

    componentDidMount(){
        // return fetch('https://public-api.wordpress.com/rest/v1.1/stites/myglobomantics.wordpress.com/post')
        return fetch('http://demo.wp-api.org/wp-json/wp/v2/posts')
        .then((respone) => respone.json())
        .then((responeJson) =>{
            this.setState({
                blogLoaded: true,
                blogList: Array.from(responeJson)
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    chooseBlog = (blogID) => {
        console.log(`Blog ID chosen: ${blogID}`);
        this.props.navigation.navigate('BlogDetailRT', {blogId: blogID});
    }

    render(){
        console.log(`blogLoaded: ${this.state.blogLoaded}`);
        console.log(`blogList: ${this.state.blogList}`);
        return(
            <View>
                { this.state.blogLoaded && (
                    <View style={{paddingTop: 40}}>
                        <FlatList
                            data={ this.state.blogList }
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) =>
                                <BlogItem
                                    id={item.id}
                                    title={item.title.rendered}
                                    // imageSrc={item.featured_image}
                                    imageSrc='https://myglobomantics.files.wordpress.com/2018/05/team-3373638_1920.jpg'
                                    excerpt={item.excerpt.rendered}
                                    choosePost={this.chooseBlog}
                                />
                            }
                        />
                    </View>
                )}
                {!this.state.blogLoaded && (
                    <View style={{paddingTop: 40, alignItems: 'center'}}>
                        <Text>LOADING</Text>
                    </View>
                )}
            </View>
        );
    }
}

export class BlogItem extends React.Component{
    blogChoise=()=>{
        this.props.choosePost(this.props.id)
    }

    render() {
        let blogItems=`
        <a href=${this.props.id} style="textDecorationLine: none; color: #000000; textAlign: center">
            <img src=${this.props.imageSrc} />
            <h1 >${this.props.title}</h1>
            ${this.props.excerpt}
        </a>
        `;
        return(
            <View style={{borderBottomWidth: 2, borderBottomColor: '#000000', borderStyle: 'solid'}}>
                <HTML html={blogItems} onLinkPress={()=> this.blogChoise()}/>
            </View>
        );
    }
}