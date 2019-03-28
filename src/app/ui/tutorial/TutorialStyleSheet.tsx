import { StyleSheet } from "react-native";
import Style from '../../BaseStyleSheet';

const dotSize = 14;

export default StyleSheet.create({
    TextAsButton: {
        textTransform: 'uppercase',
        ...Style.colorAccent,
        marginTop: 15,
        marginRight: 20,
        fontSize: 15
    },
    TitleText: {
        ...Style.colorAccent,
        fontWeight: 'bold',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        fontSize: 18
    },
    DescriptionText: {
        ...Style.colorAccent,
        fontWeight: '100',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 85,
        fontSize: 14
    },
    dot: {
        width: dotSize, 
        height: dotSize,
        borderRadius: dotSize / 2, 
        marginBottom: 25, 
        marginLeft: 10, 
        marginRight: 10
    }
});