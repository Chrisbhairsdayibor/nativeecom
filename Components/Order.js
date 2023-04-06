import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useCreateProductMutation } from '../features/APISlice'

export default function Order() {
    const cart = useSelector((state) => state.cart.value)  

    const [createProduct]= useCreateProductMutation()

  return (
    <View>
      <Text style={styles.heading}>Order</Text>
      <Text>{JSON.stringify(cart, null, 2)}</Text>
      <Image
        source={{
          uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        }}
        style={{ width: 200, height: 200 }}
      />
      <Button
        onPress={() => {
          console.log(
            'Button',
            '<------This is the data😊😊😊😊😊😊😊😊😊😊😊😊'
          )
        }}
        title='Hello'
      />
   <Button
        onPress={() => {
            createProduct(cart)  
        }}
        title='Buy now'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: '30px',
    color: 'red',
  },
})
