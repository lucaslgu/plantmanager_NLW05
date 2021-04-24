import React from 'react';
import {StyleSheet, Text, FlatList} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
    }
}

export const PlantCardPrimary = ({ data, ...rest} : PlantProps) => {
    return(
        <RectButton style={stytles.container} {...rest}>
            <SvgFromUri uri={data.photo} width={70} height={70}/>
            <Text style={stytles.text}>
                {data.name}
            </Text>
        </RectButton>
    )
};

const stytles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        margin: 10,
        alignItems: 'center'
    },
    text:{
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 16
    }
});