
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from 'react-redux'

function Home({items}){
    console.log("items",items);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#81ecec",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state)=>{
    return {
      items: state.productList
    }
  }

const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)