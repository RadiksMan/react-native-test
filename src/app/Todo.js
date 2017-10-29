import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,TextInput,TouchableOpacity,Switch
  } from 'react-native';

  export class Todo extends Component{
      constructor(){
          super();
          this.state = {
              todos:[],
              newTodo:''
          }
      }

      componentWillMount(){
        fetch('http://localhost:3000/todos',{
            headers:{
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(todos => {
            this.setState({todos});
        })
      }

      handleChange(text){
        this.setState({newTodo:text})
      }
      handlePress(e){
        //const todos = [...this.state.todos,this.state.newTodo];
        //this.setState({todos,newTodo:''});
        fetch('http://localhost:3000/todos',{
            method:'POST',
            body:JSON.stringify({
                name:this.state.newTodo
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(todo => {
            const todos = [...this.state.todos,todo];
            this.setState({todos,newTodo:''});
        })
      }

      render(){

          return(
            <View style={styles.container}> 
                <View style={styles.form}>         
                    <TextInput 
                        value={this.state.newTodo}
                        style={styles.input}
                        onChangeText={this.handleChange.bind(this)}
                    />
                    <TouchableOpacity 
                    onPress={this.handlePress.bind(this)}
                    style={styles.button}
                    >
                        <Text style={styles.buttonText}>Create</Text>    
                    </TouchableOpacity>
                </View>  
                <View style={styles.todos}>   
                    {
                        this.state.todos.map((todo,i)=>(
                            <View style={styles.todo} key={i}>  
                                <Text style={styles.todoText} >{todo.name}</Text>
                            </View>  
                        ))
                    }  
                </View>    
            </View>
          )
      }
  }

  const styles = StyleSheet.create({
      form:{
          flexDirection:'row'
      },
      input:{
          flex:0.7,
          fontSize:24,
          height:50,
          borderWidth:1,
          borderColor: 'lightblue',
          borderRadius:3,
      },
      button:{
          flex:0.3,
          borderWidth:1,
          borderColor: 'blue',
          borderRadius:3,
          justifyContent:'center',
          alignItems:'center',
          height:50
      },
      container:{
          flex:1,
          padding:20
      },
      buttonText:{
          fontSize:24,
          fontWeight:'bold'
      },
      todos:{
          marginTop:60
      },
      todo:{
          marginBottom:10,
          borderBottomWidth:1,
          borderBottomColor:'lightgrey'
      },
      todoText:{
          fontSize:24
      }
  })