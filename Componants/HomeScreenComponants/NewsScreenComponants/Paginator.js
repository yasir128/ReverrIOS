import { View, Text, StyleSheet, useWindowDimensions, Animated } from 'react-native';
import React, { useRef } from 'react';

const Paginator = ({ data }) => {
    const scrollX = useRef(new Animated.Value(0)).current;

    const { width: windowWidth } = useWindowDimensions();
    return (
        <View style={styles.indicatorContainer}>
            {data.map((image, imageIndex) => {
                const width = scrollX.interpolate({
                    inputRange: [
                        windowWidth * (imageIndex - 1),
                        windowWidth * imageIndex,
                        windowWidth * (imageIndex + 1)
                    ],
                    outputRange: [8, 16, 8],
                    extrapolate: "clamp"
                });
                return (
                    <Animated.View
                        key={imageIndex}
                        style={[styles.normalDot, { width }]}
                    />
                );
            })}
        </View>
    );
};
const styles = StyleSheet.create({
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "white",
        marginHorizontal: 4
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Paginator;
