import react from 'react'
import {View, Text, Button} from 'react-native'


/*Criar a tela 2*/
const Tela02 = ({navigation}) => {
    /*logica */
    return (
        <View>
            <Text> eu sou a tela 2</Text> 
            <Button
        title="HOME"
        onPress={() => navigation.navigate('TelaPrincipal')}
      /> 
        </View>
        
    )
}

export default Tela02;