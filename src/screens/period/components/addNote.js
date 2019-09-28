/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';

export default props => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1, marginHorizontal: 10}}
          behavior="padding"
          enabled>
          <View style={{flex: 1}}>
            <TextInput
              placeholder="My note"
              onChangeText={props.onInputChange}
              style={{
                textAlign: 'left',
                color: '#6f82c6',
                height: 40,
                borderBottomColor: '#6f82c6',
                borderBottomWidth: 2,
                marginVertical: 7,
              }}
            />
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginVertical: 25,
            }}>
            <TouchableOpacity
              onPress={props.onSave}
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: '#6f82c6',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="checkmark"
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  color: '#ffffff',
                }}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
