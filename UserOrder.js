import React , {Component} from 'react';
import {Container,Segment,Button,Text,Thumbnail} from 'native-base' 
export default class UserOrderScreen extends Component{
    static navigationOptions = {
        title: 'Order #',
      };
    render(){
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return(
            <Container>
                <Segment>
          <Button first>
            <Text>Pending</Text>
          </Button>
          <Button>
            <Text>Ready</Text>
          </Button>
          <Button last active>
            <Text>Completed</Text>
          </Button>
        </Segment>


        <Thumbnail square large source={{uri: uri}} />

        <Text>Title </Text>
        <Text>Customer Name</Text>
        <Text>Deadline</Text>


        <Button rounded success> 
        <Text>Delete</Text>
        </Button>
              
            </Container>

        )
    }
}