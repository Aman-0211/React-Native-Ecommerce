import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Alert,
  Text,
  Platform,
  View,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../../components';
import { addShiping } from '../../store/actions/CartAction';
import CartList from './cartList';

function Cart({data, navigation, ...props}) {
  const renderItem = ({item}) => {
    return <CartList key={item.id} data={item} />;
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Your shipment is on its way!",
      "Dear Customer Thank you for your recent order from our shop. We are pleased to inform you that the items listed below are now on the way to you.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {navigation.navigate('home')} }
      ],
      { cancelable: false }
    );

  console.log('cartList', data);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.addedItems}
        renderItem={(item) => renderItem(item, props)}
        keyExtractor={(item) => item.id}
      />
      <Button
        style={{
        //   height: 50,
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowOpacity: 0.1,
          shadowRadius: 4.0,
          backgroundColor: 'red',
          borderRadius: 150,
          elevation: 10,
          position: 'absolute',
          bottom: 65,
          right: 10,
        }}
        onPress={createTwoButtonAlert}
        labelStyle={{fontSize: 12, color: '#000', alignItem: 'center'}}
        label="+"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
    backgroundColor: '#F8F8F8',
  },
});

const mapStateToProps = (state) => {
  return {
    data: state.productList,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => {
        dispatch(addShiping(id));
      },
      
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
