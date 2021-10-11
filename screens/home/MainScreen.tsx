import * as React from 'react';
import {Button, StyleSheet} from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import {toast} from "../../components/common/Toast";

export default function MainScreen({ navigation }: RootTabScreenProps<'Main'>) {
    return (
        <View style={styles.container}>
            <Text>Main Screen</Text>
            <Button title={'Toast'} onPress={()=>toast('Show Toast!')} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
