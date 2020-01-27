import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, NativeModules ,DeviceEventEmitter} from 'react-native';

class ReactNativeModal extends React.Component {
    componentDidMount(){
         DeviceEventEmitter.addListener('MyCustomEvent',(event)=>{
         alert(event.MyCustomEventParam);
    })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hello}>Hello modal!</Text>
                <Text style={styles.message}>
                    Sample Comments Coming Here !!
                </Text>
                <Button
                    title={"Hide Comments"}
                    onPress={() => NativeModules.ReactNativeModalBridge.closeModal()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BBBBBB',
    },
    hello: {
        fontSize: 28,
        fontWeight: "600",
        textAlign: 'center',
    },
    message: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20
    }
});

AppRegistry.registerComponent('ReactNativeModal', () => ReactNativeModal);
