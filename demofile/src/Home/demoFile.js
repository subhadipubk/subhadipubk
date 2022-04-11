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
import {SliderBox} from 'react-native-image-slider-box';
// import LinearGradient from 'react-native-linear-gradient';
class DemoFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../img/cover.png'),
        require('../../img/beautifull-flower-hd--wallpaper.jpg'),
        require('../../img/cover.png'),
      ],
    };
  }
  details = () => {
    this.props.navigation.navigate('Details');
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerMainContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.groceryPart}>
              <Text style={styles.groceryText}>Grocery</Text>
              <TouchableOpacity>
                <Image
                  source={require('../../img/Back.png')}
                  style={styles.backImg}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.logoView}>
              <Text style={styles.logoText}>Logo</Text>
            </View>
            <TouchableOpacity style={styles.cartImgView}>
              <Image
                source={require('../../img/shopping-cart.png')}
                style={styles.cartImg}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.heartImgView}>
              <Image
                source={require('../../img/heart.png')}
                style={styles.heartImg}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.changeView}>
            <Text style={styles.changeText}>Change</Text>
          </View>
          <View style={styles.searchMainView}>
            <View style={{flex: 0.8}}>
              <TextInput
                placeholder="Search product"
                placeholderTextColor={'black'}
                style={styles.textInputStyle}
              />
            </View>
            <TouchableOpacity style={styles.searchImgView}>
              <Image
                source={require('../../img/search.png')}
                style={styles.searchImg}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.productMainView}>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
              <View style={{}}>
                <TouchableOpacity style={styles.productImgView}>
                  <Image
                    source={require('../../img/productOne.png')}
                    style={styles.productImg}
                  />
                </TouchableOpacity>
                <Text style={styles.allText}>All</Text>
              </View>
              <View style={{marginLeft: 18}}>
                <TouchableOpacity style={styles.productImgView}>
                  <Image
                    source={require('../../img/productTwo.png')}
                    style={styles.productImg}
                  />
                </TouchableOpacity>
                <Text style={styles.otherText}>Rice</Text>
              </View>
              <View style={{marginLeft: 18}}>
                <TouchableOpacity style={styles.productImgView}>
                  <Image
                    source={require('../../img/productThree.png')}
                    style={styles.productImg}
                  />
                </TouchableOpacity>
                <Text style={styles.otherText}>oil</Text>
              </View>
              <View style={{marginLeft: 18}}>
                <TouchableOpacity style={styles.productImgView}>
                  <Image
                    source={require('../../img/productFour.png')}
                    style={styles.productImg}
                  />
                </TouchableOpacity>
                <Text style={styles.otherText}>Flour</Text>
              </View>
              <View style={{marginLeft: 18}}>
                <TouchableOpacity style={styles.productImgView}>
                  <Image
                    source={require('../../img/productFive.png')}
                    style={styles.productImg}
                  />
                </TouchableOpacity>
                <Text style={styles.otherText}>Biscuit</Text>
              </View>
              <View style={{marginLeft: 18}}>
                <TouchableOpacity style={styles.productImgView}>
                  <Image
                    source={require('../../img/productFive.png')}
                    style={styles.productImg}
                  />
                </TouchableOpacity>
                <Text style={styles.otherText}>Biscuit</Text>
              </View>
            </ScrollView>
          </View>
          <View>
            <SliderBox
              images={this.state.images}
              onCurrentImagePressed={index => `image ${index} pressed`}
              sliderBoxHeight={150}
              dotColor="#FC3F49"
              inactiveDotColor="#C4C4C4"
              autoplay={true}
              circleLoop
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 15,
                padding: 0,
                margin: 0,
                top: 30,
              }}
            />
            {/* <View style={styles.dotView}>
              <View style={styles.firstDot} />
              <View style={styles.secondtDot} />
              <View style={styles.thirdtDot} />
            </View> */}
          </View>
          <View style={styles.advantageMainView}>
            <View style={styles.wholeSaleView}>
              <Text style={styles.wholeSaleText}>Whole sale advantages</Text>
            </View>
            <View style={styles.advantageImgView}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: '2%',
                  marginBottom: '2%',
                }}>
                <View style={{flex: 0.2, marginLeft: '2%'}}>
                  <Image
                    source={require('../../img/rupeeOne.png')}
                    style={styles.advantageImg}
                  />
                  <Text style={styles.advImgText}>Best margine</Text>
                </View>
                <View style={{flex: 0.4, marginLeft: '2%'}}>
                  <Image
                    source={require('../../img/deliveryCar.png')}
                    style={styles.advantageImg}
                  />
                  <Text style={styles.advImgText}>
                    Express door step delivery
                  </Text>
                </View>
                <View style={{flex: 0.2, marginLeft: '2%'}}>
                  <Image
                    source={require('../../img/rupeeTwo.png')}
                    style={styles.advantageImg}
                  />
                  <Text style={styles.advImgText}>Easy credit</Text>
                </View>
                <View style={{flex: 0.2, marginRight: '2%', marginRight: 10}}>
                  <Image
                    source={require('../../img/smartBooking.png')}
                    style={styles.advantageSmartImg}
                  />
                  <Text style={styles.advImgText}>Smart selection</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.recomendedText}>Recomended</Text>
          </View>
          <View style={styles.recomendedView}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.recomendedMainView}>
                <View style={styles.recomendedDetailsView}>
                  <View style={{flex: 0.2}}>
                    <ImageBackground
                      source={require('../../img/bar.png')}
                      style={styles.barImg}>
                      <Text style={styles.rotateTxt}>40% off</Text>
                    </ImageBackground>
                  </View>
                  <View style={{flex: 0.6}}>
                    <Image
                      source={require('../../img/hemaniOil.png')}
                      style={styles.hemaniOilImg}
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
                  <Text style={styles.fortuneText}>
                    Fortune mustard oil 1lit
                  </Text>
                  <Text style={styles.rupiesText}>RS 150/lit</Text>
                  <Text style={styles.maxOrderText}>Minimum order 50dz</Text>
                </View>
                <TouchableOpacity style={styles.addToCartView}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.recomendedMainView}>
                <View style={styles.recomendedDetailsView}>
                  <View style={{flex: 0.2}}>
                    <ImageBackground
                      source={require('../../img/bar.png')}
                      style={styles.barImg}>
                      <Text style={styles.rotateTxt}>40% off</Text>
                    </ImageBackground>
                  </View>
                  <View style={{flex: 0.6}}>
                    <Image
                      source={require('../../img/fortuneOil.png')}
                      style={styles.hemaniOilImg}
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
                  <Text style={styles.fortuneText}>
                    Fortune Refined oil 5lit
                  </Text>
                  <Text style={styles.rupiesText}>RS 110/lit</Text>
                  <Text style={styles.maxOrderText}>Minimum order 50dz</Text>
                </View>
                <TouchableOpacity style={styles.addToCartView}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.recomendedMainView}>
                <View style={styles.recomendedDetailsView}>
                  <View style={{flex: 0.2}}>
                    <ImageBackground
                      source={require('../../img/bar.png')}
                      style={styles.barImg}>
                      <Text style={styles.rotateTxt}>40% off</Text>
                    </ImageBackground>
                  </View>
                  <View style={{flex: 0.6}}>
                    <Image
                      source={require('../../img/hemaniOil.png')}
                      style={styles.hemaniOilImg}
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
                  <Text style={styles.fortuneText}>
                    Fortune mustard oil 1lit
                  </Text>
                  <Text style={styles.rupiesText}>RS 150/lit</Text>
                  <Text style={styles.maxOrderText}>Minimum order 50dz</Text>
                </View>
                <TouchableOpacity style={styles.addToCartView}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.recomendedMainView}>
                <View style={styles.recomendedDetailsView}>
                  <View style={{flex: 0.2}}>
                    <ImageBackground
                      source={require('../../img/bar.png')}
                      style={styles.barImg}>
                      <Text style={styles.rotateTxt}>40% off</Text>
                    </ImageBackground>
                  </View>
                  <View style={{flex: 0.6}}>
                    <Image
                      source={require('../../img/fortuneOil.png')}
                      style={styles.hemaniOilImg}
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
                  <View>
                    <Text style={styles.fortuneText}>
                      Fortune Refined oil 5lit
                    </Text>
                  </View>
                  <Text style={styles.rupiesText}>RS 110/lit</Text>
                  <Text style={styles.maxOrderText}>Minimum order 50dz</Text>
                </View>
                <TouchableOpacity style={styles.addToCartView}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          {/* <LinearGradient
            colors={['#FFA600', '#FFA600']}
            start={{x: -1, y: 0}}
            end={{x: 1, y: 0}}>

            </LinearGradient> */}
          <View style={styles.buyMoreMainView}>
            <View style={styles.buyContainerView}>
              <View style={{flex: 0.4}}>
                <Image
                  source={require('../../img/buyAll.png')}
                  style={styles.buyAllImg}
                />
              </View>
              <View style={{flex: 0.6}}>
                <View style={styles.buyTextView}>
                  <Text style={styles.buyMoreText}>Buy more</Text>
                  <Text style={styles.saveMoreText}> Save more</Text>
                </View>
                <TouchableOpacity style={styles.shopNowView}>
                  <Text style={styles.shopNowText}>Shop now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.recomendedLastView}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.recomendedMainView}>
                <View style={styles.recomendedDetailsView}>
                  <View style={{flex: 0.2}}>
                    <ImageBackground
                      source={require('../../img/bar.png')}
                      style={styles.barImg}>
                      <Text style={styles.rotateTxt}>40% off</Text>
                    </ImageBackground>
                  </View>
                  <View style={{flex: 0.6}}>
                    <Image
                      source={require('../../img/hemaniOil.png')}
                      style={styles.hemaniOilImg}
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
                  <Text style={styles.fortuneText}>
                    Fortune mustard oil 1lit
                  </Text>
                  <Text style={styles.rupiesText}>RS 150/lit</Text>
                  <Text style={styles.maxOrderText}>Minimum order 50dz</Text>
                </View>
                <TouchableOpacity style={styles.addToCartView}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.recomendedMainView}>
                <View style={styles.recomendedDetailsView}>
                  <View style={{flex: 0.2}}>
                    <ImageBackground
                      source={require('../../img/bar.png')}
                      style={styles.barImg}>
                      <Text style={styles.rotateTxt}>40% off</Text>
                    </ImageBackground>
                  </View>
                  <View style={{flex: 0.6}}>
                    <Image
                      source={require('../../img/fortuneOil.png')}
                      style={styles.hemaniOilImg}
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
                  <Text style={styles.fortuneText}>
                    Fortune Refined oil 5lit
                  </Text>
                  <Text style={styles.rupiesText}>RS 110/lit</Text>
                  <Text style={styles.maxOrderText}>Minimum order 50dz</Text>
                </View>
                <TouchableOpacity style={styles.addToCartView}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.recomendedMainView}>
                <View style={styles.recomendedDetailsView}>
                  <View style={{flex: 0.2}}>
                    <ImageBackground
                      source={require('../../img/bar.png')}
                      style={styles.barImg}>
                      <Text style={styles.rotateTxt}>40% off</Text>
                    </ImageBackground>
                  </View>
                  <View style={{flex: 0.6}}>
                    <Image
                      source={require('../../img/hemaniOil.png')}
                      style={styles.hemaniOilImg}
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
                  <Text style={styles.fortuneText}>
                    Fortune mustard oil 1lit
                  </Text>
                  <Text style={styles.rupiesText}>RS 150/lit</Text>
                  <Text style={styles.maxOrderText}>Minimum order 50dz</Text>
                </View>
                <TouchableOpacity style={styles.addToCartView}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.recomendedMainView}>
                <View style={styles.recomendedDetailsView}>
                  <View style={{flex: 0.2}}>
                    <ImageBackground
                      source={require('../../img/bar.png')}
                      style={styles.barImg}>
                      <Text style={styles.rotateTxt}>40% off</Text>
                    </ImageBackground>
                  </View>
                  <View style={{flex: 0.6}}>
                    <Image
                      source={require('../../img/fortuneOil.png')}
                      style={styles.hemaniOilImg}
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
                  <View>
                    <Text style={styles.fortuneText}>
                      Fortune Refined oil 5lit
                    </Text>
                  </View>
                  <Text style={styles.rupiesText}>RS 110/lit</Text>
                  <Text style={styles.maxOrderText}>Minimum order 50dz</Text>
                </View>
                <TouchableOpacity style={styles.addToCartView}>
                  <Text style={styles.addToCartText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View style={{marginTop: 10}} />
        </ScrollView>
        <View style={styles.footerMainView}>
          <View style={styles.footerContainer}>
            <TouchableOpacity style={{flex: 1}}>
              <Image
                source={require('../../img/home.png')}
                style={styles.footerImg}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}} onPress={() => this.details()}>
              <Image
                source={require('../../img/package.png')}
                style={styles.footerImg}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../img/bag.png')}
                style={styles.footerImg}
              />
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
  headerMainContainer: {
    backgroundColor: '#FC3F49',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
  },
  headerContainer: {
    marginTop: '3%',
    marginLeft: '5%',
    marginRight: '5%',
    flexDirection: 'row',
  },
  backImg: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginTop: -8,
    right: 8,
  },
  cartImg: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginTop: 2,
  },
  heartImg: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  groceryPart: {
    flexDirection: 'row',
    flex: 0.3,
  },
  logoView: {
    flex: 0.3,
    justifyContent: 'center',
  },
  cartImgView: {
    flex: 0.2,
  },
  heartImgView: {
    flex: 0.2,
  },
  groceryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
  },
  logoText: {
    alignSelf: 'flex-end',
    right: 19,
    fontSize: 14,
    color: '#fff',
    marginTop: -15,
  },
  changeView: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  changeText: {
    color: '#fff',
    fontSize: 14,
    marginTop: -5,
  },
  searchImg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    right: 10,
    marginTop: 15,
  },
  searchMainView: {
    marginTop: '3%',
    marginBottom: '3%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderColor: '#000',
    borderRadius: 25,
  },
  textInputStyle: {
    marginLeft: '5%',
    color: '#000',
  },
  searchImgView: {
    flex: 0.2,
  },
  productMainView: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
  },
  productImg: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 5,
  },
  productImgView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#FFD0D3',
  },
  allText: {
    color: '#FF2B36',
    textAlign: 'center',
    marginTop: 5,
    right: 2,
  },
  otherText: {
    color: '#000',
    textAlign: 'center',
    marginTop: 5,
    right: 2,
  },
  coverImg: {
    resizeMode: 'stretch',
    height: 170,
    width: '100%',
  },
  firstDot: {
    height: 7,
    width: 7,
    backgroundColor: '#C4C4C4',
    borderRadius: 4,
  },
  secondtDot: {
    height: 7,
    width: 7,
    backgroundColor: '#FC3F49',
    borderRadius: 4,
    marginLeft: 5,
  },
  thirdtDot: {
    height: 7,
    width: 7,
    backgroundColor: '#C4C4C4',
    borderRadius: 4,
    marginLeft: 5,
  },
  dotView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '3%',
    marginBottom: '3%',
  },
  advantageMainView: {
    marginLeft: '2%',
    marginRight: '2%',
    flexDirection: 'row',
    marginTop: '8%',
    marginBottom: '3%',
  },
  wholeSaleText: {
    color: '#000',
    marginTop: '10%',
    marginBottom: '10%',
    marginLeft: '10%',
    marginRight: '10%',
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  wholeSaleView: {
    flex: 0.3,
    backgroundColor: '#FC3F49',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  advantageImgView: {
    borderWidth: 4,
    borderColor: '#FFE5B4',
    flex: 0.7,
  },
  advantageImg: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  advantageSmartImg: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    left: 7,
  },
  advImgText: {
    color: '#000',
    fontSize: 10,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  recomendedText: {
    fontSize: 18,
    color: '#000',
    marginLeft: '5%',
    // marginTop: '3%',
    marginBottom: '3%',
    fontWeight: 'bold',
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
    marginTop: 20,
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
    backgroundColor: '#FF2B36',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 25,
  },
  buyMoreMainView: {
    backgroundColor: '#FFA600',
    marginTop: '5%',
    marginBottom: '3%',
    // height: 100,
    // width: '100%',
  },
  buyContainerView: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    marginBottom: '2%',
    flexDirection: 'row',
  },
  buyAllImg: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
  },
  buyMoreText: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  buyTextView: {
    // marginTop: '5%',
  },
  saveMoreText: {
    color: '#FC3F49',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  shopNowView: {
    backgroundColor: '#FC3F49',
    alignSelf: 'flex-end',
    marginTop: '3%',

    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 25,
  },
  shopNowText: {
    color: '#fff',
    textAlign: 'center',
  },
  footerMainView: {
    backgroundColor: '#FC3F49',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerContainer: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '3%',
    marginTop: '3%',
    flexDirection: 'row',
  },
  footerImg: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});

export default DemoFile;
