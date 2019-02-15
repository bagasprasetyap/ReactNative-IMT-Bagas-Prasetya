import React, { Component } from "react";
import { Alert } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content,
  Text,
  Footer,
  Form,
  Item,
  Label,
  Input,
  Button,
  Card,
  CardItem
} from "native-base";

class App extends Component {
  constructor() {
    super();
    this.state = {
      massa: 0,
      tinggi: 0,
      imt: 0,
      diagnosa: ""
    };
  }

  hitung = () => {
    let m = this.state.massa;
    let t = this.state.tinggi;
    let hasil = m / Math.pow(t, 2);
    this.setState({ imt: hasil });
    if (hasil < 18.5) {
      this.setState({ diagnosa: "Berat Badan Anda Kurang" });
    } else if (hasil >= 18.5 && hasil <= 24.9) {
      this.setState({ diagnosa: "Berat Badan Anda Ideal" });
    } else if (hasil >= 25 && hasil <= 29.9) {
      this.setState({ diagnosa: "Berat Badan Anda Berlebih" });
    } else if (hasil >= 30 && hasil <= 39.9) {
      this.setState({ diagnosa: "Berat Badan Anda Sangat Berlebih" });
    } else if (hasil > 39.9) {
      this.setState({ diagnosa: "Anda Obesitas!" });
    } else {
      Alert.alert("Mohon Input Data");
    }
  };

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>INDEKS MASSA TUBUH</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form style={{ width: 250, alignSelf: "center" }}>
            <Item floatingLabel>
              <Label>Massa (kg)</Label>
              <Input
                onChangeText={e => {
                  this.setState({ massa: e });
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label>Tinggi (cm)</Label>
              <Input
                onChangeText={e => {
                  this.setState({ tinggi: e / 100 });
                }}
              />
            </Item>
          </Form>
          <Button
            rounded
            success
            style={{ margin: 20, alignSelf: "center" }}
            onPress={this.hitung}
          >
            <Text>HITUNG IMT</Text>
          </Button>

          <Card style={{ width: 450, alignSelf: "center" }}>
            <CardItem>
              <Text>Massa Tubuh:</Text>
              <Text style={{ marginLeft: 25, fontWeight: "bold" }}>
                {this.state.massa} kg
              </Text>
            </CardItem>
            <CardItem>
              <Text>Tinggi Badan:</Text>
              <Text style={{ marginLeft: 25, fontWeight: "bold" }}>
                {this.state.tinggi} M
              </Text>
            </CardItem>
            <CardItem>
              <Text>Indeks Massa Tubuh:</Text>
              <Text style={{ marginLeft: 25, fontWeight: "bold" }}>
                {this.state.imt}
              </Text>
            </CardItem>
            <CardItem>
              <Text>Diagnosa:</Text>
              <Text style={{ marginLeft: 25, fontWeight: "bold" }}>
                {this.state.diagnosa}
              </Text>
            </CardItem>
          </Card>
        </Content>
        <Footer />
      </Container>
    );
  }
}

export default App;
