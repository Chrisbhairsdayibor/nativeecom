import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from'../features/counterSlice'

export default function counter() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <View>
        <Text>{count}</Text>
      <Text style={styles.heading}>counter</Text>
   
      <Button
        onPress={() => {
         dispatch(increment())
        }}
        title='+'
      />
          <Button
        onPress={() => {
         dispatch(decrement())
        }}
        title='-'
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
