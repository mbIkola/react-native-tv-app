import React,{Component} from 'react';
import {Container,List,ListItem,Text,Left,Button,Content,Body,Right,Switch} from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome"

export default class Sidebar extends Component{
    render(){
        return (
            <Container>
                <Content>
          <ListItem icon>
            <Left>
              
                <Icon active name="user" />
              
            </Left>
            <Body>
              <Text>Kashif Ahmed </Text>
              <Text>Kashif Cloth Service</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem >
            
            <Body>
              <Text>Orders</Text>
              
            </Body>
            
          </ListItem>


          <ListItem >
            
            <Body>
              <Text>Reports</Text>
              
            </Body>
            
          </ListItem>


          <ListItem >
            
            <Body>
              <Button><Text>Logout</Text></Button>
              
            </Body>
            
          </ListItem>

          </Content>
  
            </Container>
        )
    }
}