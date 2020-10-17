import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  View,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {addToCart} from '../../store/actions/CartAction';
import ProductList from './productList';

function Home({data, addToCart, ...props}) {
  const renderItem = ({item}) => {
    return <ProductList key={item.id} data={item} addToCart={addToCart} />;
  };
  console.log('reducer', data);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.items}
        renderItem={(item) => renderItem(item, props)}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
