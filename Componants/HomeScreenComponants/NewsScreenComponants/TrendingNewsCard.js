import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import AppColors from '../../../Constaint/AppColors';

const TrendingNewsCard = (props) => {
    return (
        <View style={{ alignItems: 'center', paddingBottom: 10 }}>
            <FlatList
                data={props.data}
                horizontal
                pagingEnabled
                onScroll={props.onScroll}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
                        <ImageBackground style={{ flex: 1, }} source={{ uri: item.image }} >
                            <View style={styles.title}>
                                <Text style={{
                                    color: AppColors.FontsColor,
                                    fontFamily: "Poppins-Regular",
                                }}>{item.title}</Text>
                            </View>

                        </ImageBackground>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginStart: 10,
        marginEnd: 10,
        width: 340,
        height: 200,
        overflow: 'hidden',
        borderRadius: 20
    },
    title: {
        position: 'absolute',
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        width: "100%",
        height: "30%",
        paddingVertical: 5,
        alignItems: 'center',
        top: 145
    },
})

export default TrendingNewsCard;
