import React ,{Component} from 'react';
import {Container, Drawer,Header,Left,Button,Right,Body,Title,Item,Text,Input, Card, CardItem,Content} from 'native-base';

import Icon from "react-native-vector-icons/FontAwesome"
import Sidebar from './Sidebar';

export default class SearchUserScreen extends Component{
  closeDrawer = () => {
    this._drawer._root.close();
}
openDr

  openDrawer = () => {
    alert('open');
    this._drawer._root.open();
}

      render(){
          return(
              <Container>

 <Header>
          <Left>
            <Button transparent  onPress={this.openDrawer}>
              <Icon name='bars' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right/>


        </Header>
        <Content>
                     <Drawer
                    ref={(ref) => { this._drawer = ref; }}
                    content={<Sidebar />}>
                    
                    </Drawer>
                </Content>
        <Item>
            <Icon name="search" />
            <Input placeholder="Search" />
            
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>


          <Card>
            <CardItem  button onPress={() => alert("This is Card Header")}>
              <Text>Order  # </Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>
                  Customer Name
                </Text>
              </Body>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Footer")}>
              <Text>Date</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Footer")}>
              <Text>Pending</Text>
            </CardItem>
          </Card>

              </Container>
          )
      }
}
 