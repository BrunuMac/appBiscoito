import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      navigation.navigate('Home');
    } else {
      alert('Erro usuário ou senha incorreta!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.title}>Tela de Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0B0B0',
  },
  background: {
    backgroundColor: '#D3D3D3',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#000000', // Azul claro
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  button: {
    borderWidth: 2,
    borderBlockColor: 'black',
    padding: 8,
    borderRadius: 8,
    paddingHorizontal: 20,
    fontWeight: 'bold'
  },
  buttonText: {
    color: '#000000', // Cor do texto do botão
    fontSize: 18,
    fontWeight: 'bold',
  },
});
