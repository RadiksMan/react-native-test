import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,TextInput,TouchableOpacity
  } from 'react-native';

  export class Todo extends Component{
      constructor(){
          super();
          this.state = {
              todos:[],
              newTodo:''
          }
      }

      handleChange(text){
        this.setState({newTodo:text})
      }
      handlePress(e){
        const todos = [...this.state.todos,this.state.newTodo];
        this.setState({todos,newTodo:''});
      }

      render(){

          return(
            <View>        
                <TextInput 
                    value={this.state.newTodo}
                    style={{height:40}} 
                    onChangeText={this.handleChange.bind(this)}
                />
                <TouchableOpacity onPress={this.handlePress.bind(this)}>
                    <Text>Create</Text>    
                </TouchableOpacity>
                <View>   
                    {
                        this.state.todos.map((todo,i)=>(
                            <Text key={i}>{todo}</Text>
                        ))
                    }  
                </View>    
            </View>
          )
      }
  }