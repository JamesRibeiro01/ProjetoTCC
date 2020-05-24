import React, { Component } from 'react';
import { TouchableOpacity } from "react-native";
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import Event from "../Event";
import { createStackNavigator } from "@react-navigation/stack";

const EventStack = createStackNavigator();

export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.faesa.br/wp-content/uploads/2018/01/cropped-logo_faesa_perfil.png' }} />
              </Left>
              <Body>
                <Text>Palestra Sobre Big Data</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <TouchableOpacity onPress = {()=>{MainEventStackScreen}}>
                  <Text style = {{color: 'blue'}}>View</Text>
                </TouchableOpacity>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'data:image/jpeg;base64,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' }} />
              </Left>
              <Body>
                <Text>HackFaesa 7.0</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.faesa.br/wp-content/uploads/2019/08/hotsite_mov.ie_Logo-1.png' }} />
              </Left>
              <Body>
                <Text>Mov.ie</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'data:image/jpeg;base64,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' }} />
              </Left>
              <Body>
                <Text>FAESA Summit</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAvwlDPsBq1I_W1IOMVSO-2-p2nT2OK8zaIPr-EvTBnKJY1NR3&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>FAESA Talks</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-osJ3apkHViQnYgeKcBgHgEdCcSY2Pg-P7O0AZpIOJVfXysOp&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>Feira de Tecnologia e Gestão</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHp9Db8gmXNUlaSzfIPaU8YOztnezUPoA135bnCSdg12t24rBC&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>Evento 1</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.faesa.br/wp-content/uploads/2018/01/cropped-logo_faesa_perfil.png' }} />
              </Left>
              <Body>
                <Text>Evento 2</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHp9Db8gmXNUlaSzfIPaU8YOztnezUPoA135bnCSdg12t24rBC&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>Evento 3</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://www.faesa.br/wp-content/uploads/2018/01/cropped-logo_faesa_perfil.png' }} />
              </Left>
              <Body>
                <Text>Evento 4</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}


const MainEventStackScreen = ({ navigation }) => (
    <EventStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWwight: 'bold'
        }
    }}>

        <EventStack.Screen name="Event" component={Event} options={{
            title: 'Event',
        }} />
    </EventStack.Navigator>
);