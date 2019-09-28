/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
var moment = require('moment');

export default props => (
  <View style={{marginHorizontal: 10, paddingVertical: 5}}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#00528e',
        borderRadius: 4,
        borderWidth: 2,
      }}>
      <View style={{flex: 1, paddingHorizontal: 10, paddingVertical: 5}}>
        <View style={{flexDirection: 'row', paddingTop: 7, paddingBottom: 3}}>
          <View>
            <Text style={{fontSize: 14, color: '#000000', fontWeight: '400'}}>
              Dose Name:{' '}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 14, color: '#00528e', fontStyle: 'italic'}}>
              {props.note}
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', paddingBottom: 3}}>
          <View>
            <Text style={{fontSize: 14, color: '#000000', fontWeight: '400'}}>
              Tablets/Injections:{' '}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 14, color: '#00528e', fontStyle: 'italic'}}>
              {props.note}
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{fontSize: 14, color: '#000000', fontWeight: '400'}}>
              Reminder set on:{' '}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 14, color: '#00528e', fontStyle: 'italic'}}>
              {moment().format('YYYY-MM-D')} {props.note}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          paddingRight: 5,
          paddingTop: 13,
        }}>
        <TouchableOpacity
          onPress={() => {
            props.handleDelete(props.position);
          }}
          style={{
            height: 24,
            width: 24,
            backgroundColor: '#00528e',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#00528e',
            borderRadius: 4,
            borderWidth: 1,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#ffffff',
              fontSize: 12,
              paddingHorizontal: 2,
            }}>
            Del
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
