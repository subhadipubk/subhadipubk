import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
class ProductSummery extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    if (this.state.count <= 0) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainView}>
          <View
            style={{
              marginLeft: '5%',
              marginRight: '5%',
              marginTop: '5%',
              marginBottom: '5%',
            }}>
            <Text style={styles.bingoText}>Bingo tomato chips 90gm</Text>
          </View>
          <View
            style={{flexDirection: 'row', marginLeft: '5%', marginRight: '5%'}}>
            <View style={{flex: 0.3}}>
              <Image
                source={require('../../img/bingo.png')}
                style={styles.bingoImg}
              />
            </View>
            <View style={{flex: 0.3, marginLeft: 5}}>
              <Text style={styles.priceText}>Price</Text>
              <Text style={styles.priceText}>Total price</Text>
              <Text style={styles.priceText}>Quantity/dz</Text>
            </View>
            <View style={{flex: 0.4}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                  marginBottom: 10,
                  marginLeft: 50,
                }}>
                RS 45/dz
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,

                  marginLeft: 50,
                  marginBottom: 10,
                }}>
                RS 2250
              </Text>
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <TouchableOpacity
                  onPress={this.decrement}
                  style={{
                    backgroundColor: '#FD7729',
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                  }}>
                  <Text style={{color: '#fff', textAlign: 'center'}}>-</Text>
                </TouchableOpacity>
                <View>
                  <Text
                    style={{
                      color: '#000',
                      marginLeft: 10,
                      marginRight: 10,
                      textAlign: 'center',
                      marginTop: 5,
                    }}>
                    {this.state.count}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={this.increment}
                  style={{
                    backgroundColor: '#FD7729',
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                  }}>
                  <Text style={{color: '#fff', textAlign: 'center'}}>+</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: '#6A6A69',
                  fontStyle: 'italic',
                  fontSize: 10,
                  marginTop: '5%',
                  textAlign: 'center',
                }}>
                *Minimum order 50 dz
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: '5%',
              marginRight: '5%',
              flexDirection: 'row',
              marginTop: '5%',
              marginBottom: '5%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                marginRight: 5,
                flex: 0.5,
                paddingLeft: 30,
                paddingRight: 30,
                paddingBottom: 8,
                paddingTop: 8,
                borderWidth: 1,
                borderColor: '#FD7729',
                borderRadius: 25,
              }}>
              <Text style={{color: '#FD7729', textAlign: 'center'}}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginLeft: 15,
                flex: 0.5,
                paddingLeft: 30,
                paddingRight: 30,
                paddingBottom: 8,
                paddingTop: 8,
                backgroundColor: '#FD7729',
                borderRadius: 25,
              }}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                }}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  bingoText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  priceText: {
    color: '#000',
    fontSize: 12,
    marginBottom: 10,
  },
  bingoImg: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
});
export default ProductSummery;
