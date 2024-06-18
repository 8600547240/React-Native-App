import React, { useState } from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'

export const Count = () => {
    const [count,setCount] = useState(0);
    const fnIncrement = () => {
        setCount(count+1);
    }
  return (
    <View>
        <Text style={styles.cr}>Increment Count</Text>
        <Text style={styles.result}>{count}</Text>
        <Button
            onPress={fnIncrement}
            title="Increment Count"
            color="#841584" 
        />
    </View>
  )
}

const styles=StyleSheet.create({
    'cr': {
        color: 'red',
        textAlign: 'center',
        fontSize: '30px'
    },
    'result': {
        fontSize: '50px'
    }
})
 
