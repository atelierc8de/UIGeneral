import React from 'react';
import Toast from 'react-native-root-toast';

export const toast = (text='') => Toast.show(text, {
    duration: Toast.durations.LONG,
    position: 50,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
});

setTimeout(function () {
    Toast.hide(toast);
}, 500);
