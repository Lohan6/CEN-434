import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const SimpleTextEditor = () => {
  const [text, setText] = useState('');
  const [savedText, setSavedText] = useState('');

  const saveText = () => setSavedText(text);
  const clearText = () => {
    setText('');
    setSavedText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        value={text}
        onChangeText={setText}
        placeholder="Type your text here..."
      />
      <View style={styles.buttons}>
        <Button title="Save" onPress={saveText} />
        <Button title="Clear" onPress={clearText} />
      </View>
      <Text style={styles.resultText}>Saved Text: {savedText}</Text>
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
    height: 80,
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

export default SimpleTextEditor;
