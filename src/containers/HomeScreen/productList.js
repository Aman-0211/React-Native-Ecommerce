import * as React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {Card, Title, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from '../../components';
import {
  addQuantity,
  addToCart,
  subtractQuantity,
} from '../../store/actions/CartAction';

function ProductList({data, addToCart,subtractQuantity,addQuantity}) {
  console.log('data', data, addToCart);
  return (
    <Card style={styles.cardWraper}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.img} source={{uri: data.img}} />
        <View style={styles.divider} />
        <Card.Content>
          <Title style={styles.title}>{data.title}</Title>
          <Subheading>{data.production}</Subheading>
          <Subheading>{data.stock}</Subheading>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '40%'}}>
              <Subheading>
                <Icon name="inr" size={16} /> {data.price}
              </Subheading>
            </View>

            {data.quantity ? (
              <View
                style={{
                  flexDirection: 'row',
                  width: '36%',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor:'#A1E5AB',
                  borderRadius:30
                }}>
                 <Text style={{paddingHorizontal: 20}}  onPress={() => subtractQuantity(data.id)}>-</Text>
                <View
                  style={{
                    borderLeftWidth: 1,
                    borderLeftColor: '#A1E5AB',
                    height: 30,
                  }}
                />
                <Text style={{paddingHorizontal: 20}}>{data.quantity}</Text>
                <View
                  style={{
                    borderRightWidth: 1,
                    borderRightColor: '#A1E5AB',
                    height: 30,
                  }}
                />
                <Text style={{paddingHorizontal: 20}}  onPress={() => addQuantity(data.id)}>+</Text>
              </View>
            ) : (
              <View style={{width: '30%'}}>
                <Button
                  label="ADD"
                  onPress={() => addToCart(data.id)}
                  style={{backgroundColor: '#A1E5AB', alignContent: 'flex-end'}}
                />
              </View>
            )}
          </View>
        </Card.Content>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 140,
    marginVertical: '4%',
    marginHorizontal: '2%',
  },
  title: {
    fontSize: 14,
    flexWrap: 'wrap-reverse',
    paddingTop: '2%',
  },
  divider: {
    height: 120,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    marginTop: '6%',
  },
  cardWraper: {
    marginBottom: 4,
    borderRadius: 5,
    marginHorizontal: 6,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductList);
