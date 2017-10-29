import React, { Component } from 'react';

import {
    Text,
    View
  } from 'react-native';

  export class Reddit extends Component{

    constructor(){
        super();
        this.state = {
            posts:[]
        }
    }

    componentWillMount(){
        fetch('https://www.reddit.com/.json',{
            Accept: 'application/json'
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({posts:data.data.children})
        })
    }

      render(){

        console.log(this.state.posts)
          return(
              <View>
                  <Text>Reddit</Text>
                  <View>
                      {this.state.posts.map((post,i) => (
                          <Text key={i}>{post.data.author}</Text>
                      ))}
                  </View>
              </View>  
          )
      }
  }