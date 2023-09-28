import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function ComponenteTest({nome}){
        
        const [data,setData]=useState('Joao Victor');
    
        return(
            <View>
            <Text>{nome}{data}</Text>
            <Button onPress={()=>setData(9)} title='clique aqui'/>
            </View>
        );
}