import React from 'react';
import { Platform, TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, error }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle} >
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        underlineColorAnroid={Platform.Os === 'ios' ? '' : 'transparent'}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 1,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: 90,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10
  },
  error: {
    position: "absolute",
    bottom: 0,
    color: "red",
    fontSize: 10
  }
};

export { Input };
