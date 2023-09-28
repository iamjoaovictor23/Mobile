import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function ComponenteTest({nome}){
        
        const [data,setData]=useState(2);

        useEffect(()=>{
            alert('DA NÃO IDIOTA')
        },[data])
    
        return(
            <View>
            <Text>{nome}{data}</Text>
            <Button onPress={()=>setData(data+1)} title='Contador'/>
            <Button onPress={()=>setData(data-1)} title='Menos'/>
            <Button onPress={()=>setData(0)} title='Reset contador'/>
            <Button onPress={()=>setData(data+1)} title='clique aqui'/>
            </View>
        );
}