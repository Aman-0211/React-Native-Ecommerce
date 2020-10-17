import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Keyboard,
  Dimensions,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import Animatied from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import {Button, InputText} from '../../components';
import { GET_USER_AUTHENTICATION, GET_USER_AUTHENTICATION_REQUEST } from '../../store/constant';

const {width, height} = Dimensions.get('window');

const imageHeight = new Animatied.Value(height);


function LoginScreen({authenticatedata}) {

  const [val, setValue] = useState({email: '', password: ''});

const dispatch = useDispatch()

  const onsubmit = () => {
      if(val.email.length > 0 && val.password.length > 0){
        dispatch({
            type:GET_USER_AUTHENTICATION_REQUEST,
        }),
        setTimeout(()=>{
            dispatch({
                type:GET_USER_AUTHENTICATION,
            })
        console.log(val);

        },2000)
        
      }
      else{
          Alert.alert("invalid username")
      }

   
  };

  useEffect(() => {
    const keyboardWillShowSub = Keyboard.addListener(
      Platform.select({
        ios: 'keyboardWillShow',
        android: 'keyboardDidShow',
      }),
      onKeyboardWillShow,
    );
    const keyboardWillHideSub = Keyboard.addListener(
      Platform.select({
        ios: 'keyboardWillHide',
        android: 'keyboardDidHide',
      }),
      onKeyboardWillHide,
    );

    return () => {
      keyboardWillShowSub.remove();
      keyboardWillHideSub.remove();
    };
  }, [imageHeight]);
  console.log("imageHeight",imageHeight);

  function onKeyboardWillShow(event) {
    Animatied.timing(imageHeight, {
      duration: Platform.OS === 'ios' ? event.duration : 0,
      toValue: height/4,
    }).start();
  }

  function onKeyboardWillHide(event) {
    Animatied.timing(imageHeight, {
      duration: Platform.OS === 'ios' ? event.duration : 0,
      toValue: height/2.3,
    }).start();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.loginContainer}>
      <ImageBackground
        source={require('../../assets/images/bg1.jpg')}
        style={styles.image}>
        <Animatied.View style={styles.innerWraper}>
          <Text style={styles.h2}>Welcome To Online Market</Text>
          <Text style={styles.h4}>Sign in to continue</Text>
          <InputText
            label="Email"
            placeholder="email"
            mode="outlined"
            value={val.email}
            underlineColor="red"
            onFocus={(val) => console.log(val)}
            style={{marginVertical: 12}}
            onChangeText={(text) => setValue({...val, email: text})}
          />
          <InputText
            label="password"
            placeholder="password"
            mode="outlined"
            value={val.password}
            style={{marginVertical: 12}}
            secureTextEntry
            onChangeText={(text) => setValue({...val, password: text})}
          />
          <Button
            label="sign in"
            loading={authenticatedata.isLoading}
            mode="contained"
            onPress={() => {
                onsubmit();
                Keyboard.dismiss();
              }}
          />
          <Button label="sign up" mode="text" onPress={onsubmit} />
        </Animatied.View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  image: {
    width: '100%',
    flex: 1,
  },
  innerWraper: {
    flex: 1,
    marginTop: height/2.3,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderTopStartRadius: 30,
  },
  h2: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  h4: {
    fontSize: 16,
    fontWeight: '300',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});

const mapStateToProps = store => ({
    authenticatedata: store.auth,
  });
  export default connect(mapStateToProps, null)(LoginScreen);


