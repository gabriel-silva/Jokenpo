import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenpo(escolhaUsuario) {
    //gera um numero aletório (0,1,2)
    var numAletorio = Math.floor(Math.random() * 3);
    var escolhaComputador = ' ';

    switch (numAletorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    var resultado = '';
    if (escolhaComputador == 'pedra') {
      if (escolhaUsuario == 'pedra') {
        resultado = 'Empate';
      }

      if (escolhaUsuario == 'papel') {
        resultado = 'Usuário ganhou';
      }

      if (escolhaUsuario == 'tesoura') {
        resultado = 'Computador ganhou';
      }

    }

    if (escolhaComputador == 'papel') {
      if (escolhaUsuario == 'papel') {
        resultado = 'Empate';
      }

      if (escolhaUsuario == 'tesoura') {
        resultado = 'Usuário ganhou';
      }

      if (escolhaUsuario == 'pedra') {
        resultado = 'Computador ganhou';
      }

    }

    if (escolhaComputador == 'tesoura') {
      if (escolhaUsuario == 'tesoura') {
        resultado = 'Empate';
      }

      if (escolhaUsuario == 'pedra') {
        resultado = 'Usuário ganhou';
      }

      if (escolhaUsuario == 'papel') {
        resultado = 'Computador ganhou';
      }

    }

    this.setState(
      {
        escolhaUsuario: escolhaUsuario,
        escolhaComputador: escolhaComputador,
        resultado: resultado
      });

  }

  render() {
    return (
      <View>

        <Topo></Topo>
        <View></View>
        <View></View>

        <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario} </Text>
        <Text>Resultado: {this.state.resultado}</Text>
        <Button title="pedra" onPress={() => { this.jokenpo('pedra') }} />
        <Button title="papel" onPress={() => { this.jokenpo('papel') }} />
        <Button title="tesoura" onPress={() => { this.jokenpo('tesoura') }} />
      </View>
    );
  }
}

export class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./imgs/jokenpo.png')} />
      </View>
    );
  }
}