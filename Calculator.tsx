import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<number | string>('null');

  const calculate = (operation: string) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return;

    switch (operation) {
      case '+': setResult(a + b); break;
      case '-': setResult(a - b); break;
      case '*': setResult(a * b); break;
      case '/': setResult(b !== 0 ? a / b : 'Error'); break;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} keyboardType="numeric" value={num1} onChangeText={setNum1} placeholder="First number" />
      <TextInput style={styles.input} keyboardType="numeric" value={num2} onChangeText={setNum2} placeholder="Second number" />
      <View style={styles.buttons}>
        <Button title="+" onPress={() => calculate('+')} />
        <Button title="-" onPress={() => calculate('-')} />
        <Button title="*" onPress={() => calculate('*')} />
        <Button title="/" onPress={() => calculate('/')} />
      </View>
      <Text style={styles.resultText}>Result: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    marginBottom: 24,
  },
  input: {
    height: 48,
    borderColor: '#b0b0b0',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 17,
    marginBottom: 18,
    backgroundColor: '#fafbfc',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
    gap: 10,
  },
  resultText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1a4d2e',
    backgroundColor: '#e6f7ef',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Calculator;
