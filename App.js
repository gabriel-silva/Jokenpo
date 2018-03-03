import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class App extends Component{
  
  constructor(props){
    super(props);

    this.state = { escolhaUsuario:'x' };
  }

  jokenpo(escolhaUsuario){
    this.setState({escolhaUsuario: escolhaUsuario});
  }
  
  render() {
    return (
      <View>
        <Text>Escolha do computador</Text>
        <Text>Escolha do usuário: { this.state.escolhaUsuario } </Text>
        <Text>Resultado</Text>
        <Button title="pedra" onPress={ () => { this.jokenpo('pedra') } } />
        <Button title="papel" onPress={ () => { this.jokenpo('papel') } } />
        <Button title="tesoura" onPress={ () => { this.jokenpo('tesoura') } } />
      </View>
    );
  }
}