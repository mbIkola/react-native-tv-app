import React ,{Component} from 'react';
import {Image} from 'react-native';
import {Container, Item, Input,DatePicker, Text,Button} from 'native-base';
import  ImagePicker from 'react-native-image-picker';
import Icon from "react-native-vector-icons/FontAwesome"

export default class UserInfoScreen extends Component{
    static navigationOptions = {
        title: '',
      };

     constructor(props) {
        super(props);
        this.state = 
        {

       chosenDate: new Date(),
        avatarSource :null};
       this.setDate = this.setDate.bind(this);
       
     }



      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }


      selectImage=() =>{
        var options = {
          title: 'Select Image',
          customButtons: [
            { name: 'fb', title: 'Choose Photo from Facebook' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };



        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
     
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            const source = {uri:response.uri};
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({
              avatarSource: source,
            });
          }
        });
      };



  render(){
    

      return(
          <Container>


        <Text> Title :</Text>
         <Item rounded>
            <Input />
          </Item>


          <Text>Order :</Text>
         <Item rounded>
            <Input />
          </Item>


        <Text>Customer Name</Text>
         <Item rounded>
            <Input />
          </Item>


          
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            
            
            <Text>Image</Text>
            {this.state.avatarSource?
             <Image source={this.state.avatarSource} style={{height:200, width:300}} onPress={this.chooseFile.bind()}/>
            
            :
            <Icon name="camera" color="black" size={100} style={{marginLeft:150 ,marginTop:-200}}/>}
               <Button  round success><Text>Save</Text></Button>
    
          </Container>

      )
  }

}

