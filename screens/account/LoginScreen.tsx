import * as React from 'react';
import {Button, StyleSheet} from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
    return (
        <View style={styles.container}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Login Screen</Text>
            </View>

            <View style={{backgroundColor:'#EEF2FA', paddingVertical:40, paddingHorizontal:10, borderTopLeftRadius:20, borderTopRightRadius:20}}>
                <View style={{paddingVertical:5, borderRadius:4, backgroundColor:'#EE2031'}}>
                    <Button title={"Getting Start"} color={'#FFF'} onPress={() => navigation.navigate('Root')}/>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
