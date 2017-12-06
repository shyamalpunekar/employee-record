import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component{

  componentWillMount(){
    const config = {
        apiKey: 'AIzaSyCgr_g-oYgoUio-cs6_VWAom3KgN37R1KQ',
        authDomain: 'manager-redux.firebaseapp.com',
        databaseURL: 'https://manager-redux.firebaseio.com',
        projectId: 'manager-redux',
        storageBucket: '',
        messagingSenderId: '249860858539'
      };
      firebase.initializeApp(config);
    }


  render(){
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
