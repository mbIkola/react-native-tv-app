import React ,{Component} from 'react';
import { Container,Header, Content, Form, Item, Input, Label,Button ,Text} from 'native-base';



export default class LoginScreen extends Component{
  static navigationOptions = {
    title: 'Login',
  };
    render(){
        return(
            <Container>
                 <Header />
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
             <Item>
               <Button rounded success >
                 <Text>
                   Submit
                 </Text>
                 </Button>
             </Item>

          </Form>
        </Content>
            </Container>


        )  
    }
} 