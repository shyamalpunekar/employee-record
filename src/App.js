import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
