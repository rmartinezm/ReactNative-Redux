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

const primary = '#FFFFFF';
const secondary = '#000000';
const tertiary = '#111f9f';
const colors  = {
    colorPrimary: {
        backgroundColor: primary
    },
    colorSecondary: {
        backgroundColor: secondary
    },
    colorTertiary: {
        backgroundColor: tertiary
    },
    bgPrimary: {
        backgroundColor: primary
    },
    bgSecondary: {
        backgroundColor: secondary
    },
    bgTertiary: {
        backgroundColor: tertiary
    },
}

export default StyleSheet.create({
    ...dimensions,
    ...colors
});