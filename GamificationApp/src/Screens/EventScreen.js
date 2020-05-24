import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Right, Title } from 'native-base';
import Tab1 from './Tabs/TabOne';
import Tab2 from './Tabs/TabTwo';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Seus Eventos">
            <Tab1 />
          </Tab>
          <Tab heading="Proximos Eventos">
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}