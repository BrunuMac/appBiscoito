import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import biscoitoClose from './assets/biscoito.png'
import biscoitoOpen from './assets/biscoitoAberto.png'

export default function HomeScreen() {

  const frases = [
    "A vida é uma jornada, não um destino. Aproveite cada passo",
    "Grandes coisas acontecem para aqueles que nunca desistem",
    "Um sorriso é o seu melhor acessório",
    "A paciência é a chave para o sucesso",
    "A sorte favorece os corajosos",
    "Um novo começo está ao seu alcance",
    "O amor verdadeiro encontra o seu caminho",
    "O tempo cura todas as feridas",
    "Seus sonhos estão prestes a se realizar",
    "A sabedoria vem com a experiência",
    "A felicidade é uma escolha, não um destino",
    "Algo maravilhoso está para acontecer",
    "Confie no processo, o melhor está por vir",
    "A gratidão transforma o que temos em suficiente",
    "Pequenos gestos têm grande impacto",
    "Acredite em si mesmo e tudo será possível",
    "O sucesso é fruto de esforço contínuo",
    "Aprenda com o passado, viva no presente",
    "Uma atitude positiva atrai boas energias",
    "Grandes mudanças estão a caminho",
    "O amor está mais perto do que você imagina",
    "Suas ações de hoje moldam seu futuro",
    "A humildade é a verdadeira sabedoria",
    "Não há limites para quem acredita",
    "A verdadeira riqueza está nos momentos simples",
    "Um desafio superado é uma lição aprendida",
    "O perdão é o primeiro passo para a paz",
    "A gentileza é contagiosa, espalhe-a",
    "As oportunidades surgem quando menos se espera",
    "O universo está conspirando a seu favor"
  ]

  const [fraseSorteada, setFraseSorteada] = useState('');
  const [imgAtual, setImgAtual] = useState(biscoitoClose)
  const [btnTexto, setBtnTexto] = useState("Abrir biscoito")

  const biscoito = () => {
    if (imgAtual === biscoitoClose) {
      const indice = Math.floor(Math.random() * frases.length);
      setFraseSorteada(frases[indice]);
      setImgAtual(biscoitoOpen);
      setBtnTexto("Reset")
      
    } else {
      setFraseSorteada('');
      setImgAtual(biscoitoClose);
      setBtnTexto("Abrir Biscoito")
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' hidden={false} translucent={false} barStyle='default'/>
      <Image source={imgAtual} style={styles.img}></Image>

      {fraseSorteada ? (<Text style={styles.frase}>{'“ ' + fraseSorteada + ' ”'}</Text>) : (<Text style={styles.frase}></Text>)}

      <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={biscoito}>{btnTexto}</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 200,
    height: 200
  },

  frase: {
    fontFamily: 'Arial',
    fontSize: 24,
    margin: 40,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  btnArea: {
    marginTop: 20
  },

  btn: {
    borderWidth: 2,
    borderBlockColor: 'black',
    padding: 8,
    borderRadius: 8,
    paddingHorizontal: 20,
    fontWeight: 'bold'
  },

});