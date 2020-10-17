// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import AuthStack from './authRoute';
import PrivateRout from './privateRout';


function Navigation({authenticatedata}) {
  return (
      <NavigationContainer>
      {authenticatedata.loggedin ? <PrivateRout /> : <AuthStack />}
      </NavigationContainer>
 
  );
}

const mapStateToProps = store => ({
    authenticatedata: store.auth,
  });
  export default connect(mapStateToProps, null)(Navigation);

