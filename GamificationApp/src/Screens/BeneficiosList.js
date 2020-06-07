import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import { StyleSheet, View } from "react-native";
export default class BeneficiosList extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content style={{ marginTop: 10 }}>

                    <Text>Usuario: Thiago Batista</Text>
                    <Text>Matricula: 15110557                      Saldo atual: 9000</Text>

                    <View style={EstiloHome.linha2}></View>
                    <Text>Categoria: Mensalidade</Text>
                    <Card>
                        <CardItem>
                            <Icon />
                            <Text>Janeiro (Disponivel)</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Icon />
                            <Text>fevereiro (Bloqueada)</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Icon />
                            <Text>Março (Bloqueada)</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                    <View style={EstiloHome.linha}></View>

                    
                    <Text>Categoria: Lanchonete</Text>
                    <Card>
                        <CardItem>
                            <Icon />
                            <Text>Centro de Vivencias</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Icon />
                            <Text>Açai</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Icon />
                            <Text>Cantina 2</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Icon />
                            <Text>Cachorro Quente</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Icon />
                            <Text>Tio Riqueza pipoca (Doce/Salgada)</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                    <View style={EstiloHome.linha}></View>

                    <Text>Categoria: Impressora</Text>
                    <Card>
                        <CardItem>
                            <Icon />
                            <Text>Impressora 1 (Centro Vivencia)</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Icon />
                            <Text>Impressora 2 (NAT)</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                    <View style={EstiloHome.linha}></View>

                    <Text>Categoria: Outros</Text>
                    <Card>
                        <CardItem>
                            <Icon />
                            <Text>HackFaesa 25.0</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Icon />
                            <Text>Biblioteca(valor de multa acima de 20 reais)</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                    <View style={EstiloHome.linha}></View>
                </Content>
            </Container>
        );
    }
}


const EstiloHome = StyleSheet.create({
    ContainerView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#003266'
    },

    containerText1: {
        paddingRight: 195,
        marginTop: 20,
        flexDirection: 'row'
    },


    containerText2: {
        paddingRight: 214,
        marginTop: 9,
        flexDirection: 'row'
    },

    linha: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        width: 420,
        backgroundColor: 'white'
    },

    linha2: {
        marginTop: 50,
        borderWidth: 1,
        borderRadius: 5,
        width: 420,
        backgroundColor: 'white'
    },

    circle: {
        marginTop: 200,
        marginHorizontal: 100,
        borderWidth: 100,
        borderRadius: 10,
        width: 420,
        borderColor: 'grey',
        backgroundColor: 'white'
    },

    estiloTexto: {
        color: 'white'
    }
});