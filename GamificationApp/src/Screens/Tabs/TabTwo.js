import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
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
                <Text>Palestra Sobre IOT</Text>
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
                <Text>Papo Design</Text>
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
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiDPRKoBF8stib2hje5aKZY9of-bApl6eLc1fytbFOTYbss0bN&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>Projeto de Estensão</Text>
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
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrdmlb0QqVb2m9fhT67ePy26H-6iZJdpH5UQoBCUgWHNzo2OkJ&usqp=CAU' }} />
              </Left>
              <Body>
                <Text>Jornada Cientifica</Text>
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
                <Thumbnail square source={{ uri: 'data:image/png;base64,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' }} />
              </Left>
              <Body>
                <Text>Palestra IOT</Text>
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
                <Text>Evento 5</Text>
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
                <Text>Evento 6</Text>
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
                <Text>Evento 7</Text>
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
                <Text>Evento 8</Text>
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


