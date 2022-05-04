import react from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import EstilosTextos from '../estilos/EstilosTextos'


/*Criar a tela principal*/
const TelaPrincipal = ({navigation }) => {
    /*logica */
    return (
        <View style={EstilosTextos.fundoTela}>
            <Text style={EstilosTextos.tituloMenu}>  bb</Text>
            <Button
        title="Tela 1"
        onPress={() => navigation.navigate('Tela01')}
      />
                  <Button
        title="Tela 2"
        onPress={() => navigation.navigate('Tela02')}
      />
        </View>
        
    )
}


export default TelaPrincipal;