import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, FlatList, } from 'react-native';
import React, { useState } from 'react';
import AppColors from '../../../Constaint/AppColors';

const NewsCard = (props) => {

    const [clmn, setclmn] = useState(2);
    return (
        <View style={{ height: '100%', paddingBottom: 40 }}>
            <FlatList
                data={props.data}
                nestedScrollEnabled={true}
                numColumns={clmn}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.6} style={styles.NewsContainer}>
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
    NewsContainer: {
        width: "47%",
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 5,
        marginVertical: 5
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
export default NewsCard;
