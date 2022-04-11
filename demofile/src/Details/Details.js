import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Modal from 'react-native-modal';
import RBSheet from 'react-native-raw-bottom-sheet';
import ProductSummery from '../ProductSummery/productSummery';
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalCheck: false,
    };
  }
  back = () => {
    this.props.navigation.navigate('DemoFile');
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerMainView}>
          <View style={styles.headerView}>
            <TouchableOpacity
              style={styles.backImgView}
              onPress={() => this.back()}>
              <Image
                source={require('../../img/goBack.png')}
                style={styles.backImg}
              />
            </TouchableOpacity>
            <View style={{flex: 0.5}}>
              <Text style={styles.productText}>Product list</Text>
            </View>
            <TouchableOpacity style={{flex: 0.15}}>
              <Image
                source={require('../../img/searchWhite.png')}
                style={styles.searchImg}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 0.15}}>
              <Image
                source={require('../../img/shopping-cart.png')}
                style={styles.cartImg}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.productAllMainView}>
            <View style={styles.productTextView}>
              <View style={{flex: 1}}>
                <Text style={styles.productTxt}>Product</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See all</Text>
                <View
                  style={{borderBottomWidth: 1, borderBottomColor: '#1948B6'}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.allProductMainView}>
            <ScrollView horizontal={true}>
              <View style={{flex: 1}}>
                <View style={styles.bingoBacView}>
                  <Image
                    source={require('../../img/bingo.png')}
                    style={styles.bingoImg}
                  />
                </View>
                <Text style={styles.chipsText}>Chips</Text>
              </View>
              <View style={{flex: 1}}>
                <View style={styles.bingoBacView}>
                  <Image
                    source={require('../../img/kurkure.png')}
                    style={styles.bingoImg}
                  />
                </View>
                <Text style={styles.chipsText}>Kurkure</Text>
              </View>
              <View style={{flex: 1}}>
                <View style={styles.bingoBacView}>
                  <Image
                    source={require('../../img/lays.png')}
                    style={styles.bingoImg}
                  />
                </View>
                <Text style={styles.chipsText}>Cracker</Text>
              </View>
              <View style={{flex: 1}}>
                <View style={styles.bingoBacView}>
                  <Image
                    source={require('../../img/kurkure.png')}
                    style={styles.bingoImg}
                  />
                </View>
                <Text style={styles.chipsText}>Kurkure</Text>
              </View>
              <View style={{flex: 1}}>
                <View style={styles.bingoBacView}>
                  <Image
                    source={require('../../img/cococola.png')}
                    style={styles.bingoImg}
                  />
                </View>
                <Text style={styles.chipsText}>Soft Drinks</Text>
              </View>
              <View style={{flex: 1}}>
                <View style={styles.bingoBacView}>
                  <Image
                    source={require('../../img/lays.png')}
                    style={styles.bingoImg}
                  />
                </View>
                <Text style={styles.chipsText}>Cracker</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.filterSortMainView}>
            <View style={styles.filterPartView}>
              <TouchableOpacity style={styles.filter}>
                <Image
                  source={require('../../img/filter.png')}
                  style={styles.filterImg}
                />
                <Text style={styles.filterText}>Filter</Text>
              </TouchableOpacity>
              <View style={styles.verticleLine} />
              <TouchableOpacity style={styles.sort}>
                <Image
                  source={require('../../img/sort.png')}
                  style={styles.filterImg}
                />
                <Text style={styles.sortText}>Sort</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{marginLeft: '5%', marginRight: '5%', flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.5,
                borderWidth: 0.1,
                marginRight: 5,
                borderColor: '#fff',
                shadowColor: 'gray',
                shadowOffset: {
                  width: 1,
                  height: 2,
                },
                shadowOpacity: 0.8,
                shadowRadius: 3,
                elevation: 2,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.2}} />
                <View style={{flex: 0.6}}>
                  <Image
                    source={require('../../img/bingo.png')}
                    style={{
                      height: 100,
                      width: 100,
                      resizeMode: 'contain',
                      marginTop: '10%',
                      marginBottom: '5%',
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <View style={{flex: 0.2}}>
                  <Image
                    source={require('../../img/blackHeart.png')}
                    style={styles.blackheartImg}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: '#6A6A69',
                    textAlign: 'center',
                    marginBottom: 5,
                  }}>
                  Bingo tomato chips 90gm
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}>
                  RS 45/dz
                </Text>
                <Text
                  style={{
                    color: '#6A6A69',
                    fontSize: 14,
                    textAlign: 'center',
                    marginBottom: 5,
                  }}>
                  Minimum order 50dz
                </Text>
                <TouchableOpacity
                  style={styles.addToCartView}
                  onPress={() => this.RBSheet.open()}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <RBSheet
                ref={ref => {
                  this.RBSheet = ref;
                }}
                height={300}
                openDuration={250}
                customStyles={{
                  container: {
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                }}>
                <ProductSummery />
              </RBSheet>
            </View>
            {/* <View style={{flex: 0.1}} /> */}
            <View
              style={{
                flex: 0.5,
                borderWidth: 0.1,
                marginLeft: 5,
                borderColor: '#fff',
                shadowColor: 'gray',
                shadowOffset: {
                  width: 1,
                  height: 2,
                },
                shadowOpacity: 0.8,
                shadowRadius: 3,
                elevation: 2,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.2}} />
                <View style={{flex: 0.6}}>
                  <Image
                    source={require('../../img/bingo.png')}
                    style={{
                      height: 100,
                      width: 100,
                      resizeMode: 'contain',
                      marginTop: '10%',
                      marginBottom: '5%',
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <View style={{flex: 0.2}}>
                  <Image
                    source={require('../../img/blackHeart.png')}
                    style={styles.blackheartImg}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: '#6A6A69',
                    textAlign: 'center',
                    marginBottom: 5,
                  }}>
                  Bingo tomato chips 90gm
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}>
                  RS 45/dz
                </Text>
                <Text
                  style={{
                    color: '#6A6A69',
                    fontSize: 14,
                    textAlign: 'center',
                    marginBottom: 5,
                  }}>
                  Minimum order 50dz
                </Text>
                <TouchableOpacity
                  style={styles.addToCartView}
                  onPress={this.onModalCheck}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{marginLeft: '5%', marginRight: '5%', flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.5,
                borderWidth: 0.1,
                // marginLeft: 10,
                marginRight: 5,
                borderColor: '#fff',
                shadowColor: 'gray',
                shadowOffset: {
                  width: 1,
                  height: 2,
                },
                shadowOpacity: 0.8,
                shadowRadius: 3,
                elevation: 2,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.2}} />
                <View style={{flex: 0.6}}>
                  <Image
                    source={require('../../img/bingo.png')}
                    style={{
                      height: 100,
                      width: 100,
                      resizeMode: 'contain',
                      marginTop: '10%',
                      marginBottom: '5%',
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <View style={{flex: 0.2}}>
                  <Image
                    source={require('../../img/blackHeart.png')}
                    style={styles.blackheartImg}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: '#6A6A69',
                    textAlign: 'center',
                    marginBottom: 5,
                  }}>
                  Bingo tomato chips 90gm
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}>
                  RS 45/dz
                </Text>
                <Text
                  style={{
                    color: '#6A6A69',
                    fontSize: 14,
                    textAlign: 'center',
                    marginBottom: 5,
                  }}>
                  Minimum order 50dz
                </Text>
                <TouchableOpacity style={styles.addToCartView}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* <View style={{flex: 0.1}} /> */}
            <View
              style={{
                flex: 0.5,
                borderWidth: 0.1,
                marginLeft: 5,
                borderColor: '#fff',
                shadowColor: 'gray',
                shadowOffset: {
                  width: 1,
                  height: 2,
                },
                shadowOpacity: 0.8,
                shadowRadius: 3,
                elevation: 2,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.2}} />
                <View style={{flex: 0.6}}>
                  <Image
                    source={require('../../img/bingo.png')}
                    style={{
                      height: 100,
                      width: 100,
                      resizeMode: 'contain',
                      marginTop: '10%',
                      marginBottom: '5%',
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <View style={{flex: 0.2}}>
                  <Image
                    source={require('../../img/blackHeart.png')}
                    style={styles.blackheartImg}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: '#6A6A69',
                    textAlign: 'center',
                    marginBottom: 5,
                  }}>
                  Bingo tomato chips 90gm
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}>
                  RS 45/dz
                </Text>
                <Text
                  style={{
                    color: '#6A6A69',
                    fontSize: 14,
                    textAlign: 'center',
                    marginBottom: 5,
                  }}>
                  Minimum order 50dz
                </Text>
                <TouchableOpacity style={styles.addToCartView}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{marginLeft: '5%', marginRight: '5%', flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.5,
                borderWidth: 0.1,
                // marginLeft: 10,
                marginRight: 5,
                borderColor: '#fff',
                shadowColor: 'gray',
                shadowOffset: {
                  width: 1,
                  height: 2,
                },
                shadowOpacity: 0.8,
                shadowRadius: 3,
                elevation: 2,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.2}} />
                <View style={{flex: 0.6}}>
                  <Image
                    source={require('../../img/bingo.png')}
                    style={{
                      height: 100,
                      width: 100,
                      resizeMode: 'contain',
                      marginTop: '10%',
                      marginBottom: '5%',
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <View style={{flex: 0.2}}>
                  <Image
                    source={require('../../img/blackHeart.png')}
                    style={styles.blackheartImg}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: '#6A6A69',
                    textAlign: 'center',
                    marginBottom: 5,
                  }}>
                  Bingo tomato chips 90gm
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}>
                  RS 45/dz
                </Text>
                <Text
                  style={{
                    color: '#6A6A69',
                    fontSize: 14,
                    textAlign: 'center',
                    marginBottom: 5,
                  }}>
                  Minimum order 50dz
                </Text>
                <TouchableOpacity style={styles.addToCartView}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* <View style={{flex: 0.1}} /> */}
            <View
              style={{
                flex: 0.5,
                borderWidth: 0.1,
                marginLeft: 5,
                borderColor: '#fff',
                shadowColor: 'gray',
                shadowOffset: {
                  width: 1,
                  height: 2,
                },
                shadowOpacity: 0.8,
                shadowRadius: 3,
                elevation: 2,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.2}} />
                <View style={{flex: 0.6}}>
                  <Image
                    source={require('../../img/bingo.png')}
                    style={{
                      height: 100,
                      width: 100,
                      resizeMode: 'contain',
                      marginTop: '10%',
                      marginBottom: '5%',
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <View style={{flex: 0.2}}>
                  <Image
                    source={require('../../img/blackHeart.png')}
                    style={styles.blackheartImg}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: '#6A6A69',
                    textAlign: 'center',
                    marginBottom: 5,
                  }}>
                  Bingo tomato chips 90gm
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}>
                  RS 45/dz
                </Text>
                <Text
                  style={{
                    color: '#6A6A69',
                    fontSize: 14,
                    textAlign: 'center',
                    marginBottom: 5,
                  }}>
                  Minimum order 50dz
                </Text>
                <TouchableOpacity style={styles.addToCartView}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginTop: 10}} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  headerMainView: {
    backgroundColor: '#FD7729',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerView: {
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    flexDirection: 'row',
  },
  backImgView: {
    flex: 0.2,
  },
  backImg: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginTop: -5,
  },
  productText: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'flex-start',
  },
  searchImg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginTop: 3,
  },
  cartImg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginTop: 3,
  },
  productAllMainView: {
    marginLeft: '15%',
    marginRight: '15%',
  },
  productTextView: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  productTxt: {
    color: '#1948B6',
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#1948B6',
    fontSize: 16,
    // textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  allProductMainView: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  bingoImg: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 14,
  },
  bingoBacView: {
    height: 70,
    width: 70,
    borderWidth: 0.1,
    borderColor: '#fff',
    shadowColor: 'gray',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 2,
    borderRadius: 10,
    marginRight: 10,
  },
  chipsText: {
    color: '#000',
    marginTop: 5,
    // alignSelf: 'center',
    marginLeft: 12,
    fontSize: 14,
  },
  filterSortMainView: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  filterPartView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FD7729',
  },
  filter: {
    flex: 0.5,
    flexDirection: 'row',
    marginLeft: '12%',
    marginBottom: '5%',
    marginTop: '5%',
    marginRight: '5%',
  },
  sort: {
    flex: 0.5,
    flexDirection: 'row',
    marginLeft: '12%',
    marginBottom: '5%',
    marginTop: '5%',
    marginRight: '5%',
  },
  filterText: {
    color: '#1948B6',
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  sortText: {
    color: '#1948B6',
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#FD7729',
  },
  filterImg: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  recomendedView: {
    marginLeft: '2%',
    marginRight: '2%',
    flexDirection: 'row',
    flex: 1,
  },
  recomendedLastView: {
    marginBottom: '15%',
    marginLeft: '2%',
    marginRight: '2%',
    flexDirection: 'row',
    flex: 1,
  },
  recomendedDetailsView: {
    flexDirection: 'row',
  },
  recomendedDetailsRightView: {
    flexDirection: 'row',
  },
  addToCartText: {
    color: '#fff',
    textAlign: 'center',
  },
  barImg: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  rotateTxt: {
    transform: [{rotate: '330deg'}],
    fontSize: 10,
    textAlign: 'center',
    color: '#000',
    top: 30,
  },
  hemaniOilImg: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  blackheartImg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginTop: 10,
    marginRight: 5,
  },
  recomendedMainView: {
    flex: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 0.4,
    marginRight: 10,
  },
  fortuneText: {
    color: '#6A6A69',
    marginBottom: 5,
    textAlign: 'center',
    // marginLeft: 30,
    // marginRight: 30,
    fontSize: 12,
  },
  rupiesText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  maxOrderText: {
    color: '#6A6A69',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  addToCartView: {
    backgroundColor: '#FD7729',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 25,
  },
});
export default Details;
