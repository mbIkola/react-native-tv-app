/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'




export default class HomeScreen  extends Component {
  
  static navigationOptions = {
    title: 'HomeScreen',
  };
  render() {
  
    return (
    <Container style={styles.cont}>
     <Button rounded success style={styles.btn}
                    onPress = {() => this.props.navigation.navigate("LoginScreen")}>
      <Text>
        Login
      </Text>
     </Button >
     <Button rounded  primary style={styles.btn}
        onPress = {()=> this.props.navigation.navigate("SignUpScreen")}>
       <Text>
         SignUp
       </Text>
     </Button>
     <Button rounded primary style={styles.btn}> 
       <Text>
       
         Login With Facebook
       </Text>
     </Button>


     <LoginButton
          publishPermissions={["email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>



    </Container>
  

      
    );
  }
}

const styles = StyleSheet.create({
  btn :{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    margin:10,
     },
  cont:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    
  }  
});


  

