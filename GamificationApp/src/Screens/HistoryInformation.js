import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>Desconto Mensalidade Abril</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Foram utilizados 140 pontos no dia 30/04/2030
                </Text>
              </Body>
            </CardItem>  
            <CardItem footer>
              <Text>Saldo atual: 2500 </Text>
            </CardItem>         
         </Card>

         <Card>
            <CardItem header>
              <Text>Desconto Mensalidade Maio</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Foram utilizados 200 pontos no dia 30/05/2030
                </Text>
              </Body>
            </CardItem> 
            <CardItem footer>
              <Text>Saldo atual: 2300 </Text>
            </CardItem>             
         </Card>

         <Card>
            <CardItem header>
              <Text>Palestra IOT</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Parabens!!! Foram adicionados 150 pontos a carteira
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Saldo atual: 2450 </Text>
            </CardItem>            
         </Card>

         <Card>
            <CardItem header>
              <Text>Ativide avaliativa: GEMA</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Parabens!!! Foram adicionados 10 pontos a carteira
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Saldo atual: 2510 </Text>
            </CardItem>              
         </Card>

         <Card>
            <CardItem header>
              <Text>Palestra Industria 4.0</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Parabens!!! Foram adicionados 170 pontos a carteira
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Saldo atual: 2680 </Text>
            </CardItem>           
         </Card>

         <Card>
            <CardItem header>
              <Text>Desconto cantina 1</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Foram utilizados 250 pontos no dia 06/07/2030
                </Text>
              </Body>
            </CardItem> 
            <CardItem footer>
              <Text>Saldo atual: 2430 </Text>
            </CardItem>           
         </Card>

         <Card>
            <CardItem header>
              <Text>Desconto Mensalidade Setembro</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Foram utilizados 2000 pontos no dia 30/09/2030
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Saldo atual: 430 </Text>
            </CardItem>                   
         </Card>

    

      
        </Content>
      </Container>
    );
  }
}