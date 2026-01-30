import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const WeightConverter = () => {
  const [kg, setKg] = useState('');
  const pounds = kg ? (parseFloat(kg) * 2.20462).toFixed(2) : '';

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter weight in Kg: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={kg}
        onChangeText={setKg}
      />
      <Text style={styles.resultText}>Weight in Pounds: {pounds} lbs</Text>
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
  label: {
    fontSize: 19,
    marginBottom: 12,
    fontWeight: '600',
    color: '#2a2a2a',
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

export default WeightConverter;
