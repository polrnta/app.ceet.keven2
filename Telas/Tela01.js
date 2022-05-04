import react from 'react'
import {View, Text, Button} from 'react-native'


/*Criar a tela 1*/
const Tela01 = ({navigation}) => {
    /*logica */
    return (
        <View>
            <Text> eu sou a tela 1</Text> 
            <Button
        title="HOME"
        onPress={() => navigation.navigate('TelaPrincipal')}
      /> 
        </View>
        
    )
}

export default Tela01;