import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons'

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
        hour: String;
    };
    handleRemove: () => void;
}

export const PlantCardSecondary = ({ data, handleRemove, ...rest} : PlantProps) => {
    return(
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <RectButton style={stytles.buttonRemove} onPress={handleRemove}>
                            <Feather name='trash' size={32} color={colors.white} />
                        </RectButton>
                    </View>    
                </Animated.View>
            )}
        >
            <RectButton style={stytles.container} {...rest}>
                <SvgFromUri uri={data.photo} width={50} height={50}/>
                <Text style={stytles.title}>
                    {data.name}
                </Text>
                <View style={stytles.details}>
                    <Text style={stytles.timeLabel}>
                        {data.hour}
                    </Text>
                    <Text style={stytles.time}>
                        {data.hour}
                    </Text>
                </View>
            </RectButton>
        </Swipeable>
    )
};

const stytles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: colors.shape,
        marginVertical: 5
    },
    title:{
        flex: 1,
        fontFamily: fonts.heading,
        marginLeft: 10,
        fontSize: 17,
        color: colors.heading
    },
    details: {
        alignItems: 'flex-end'
    },
    timeLabel: {
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.body_light
    },
    time: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.body_dark
    },
    buttonRemove: {
        width: 100,
        height: 85,
        backgroundColor: colors.red,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 20,
        paddingLeft: 15
    }
});