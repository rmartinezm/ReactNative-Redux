import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get('window');
const dimensions = {
    fullWidth: {
        width: window.width
    },
    fullHeight: {
        height: window.height
    },
    fullScreen: {
        width: window.width,
        height: window.height
    }
}

const colorPrimary = '#FFFFFF';
const colorPrimaryDark = '#D8D8D8';
const colorAccent = '#000000';
const colors = {
    colorPrimary: {
        color: colorPrimary
    },
    colorPrimaryDark: {
        color: colorPrimaryDark
    },
    colorAccent: {
        color: colorAccent
    },
    bgColorPrimary: {
        backgroundColor: colorPrimary
    },
    bgColorPrimaryDark: {
        backgroundColor: colorPrimaryDark
    },
    bgColorAccent: {
        backgroundColor: colorAccent
    },
}

const shape = {

} 

export default StyleSheet.create({
    ...dimensions,
    ...colors,
    ...shape
});