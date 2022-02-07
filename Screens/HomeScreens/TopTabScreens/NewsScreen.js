import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import AppColors from '../../../Constaint/AppColors';
import { NewsData } from '../../../dummy-data/Dummy_News';
import TrendingNewsCard from '../../../Componants/HomeScreenComponants/NewsScreenComponants/TrendingNewsCard';
import NewsCard from '../../../Componants/HomeScreenComponants/NewsScreenComponants/NewsCard';
import Paginator from '../../../Componants/HomeScreenComponants/NewsScreenComponants/Paginator';


const NewsScreen = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.screen}>
            <View>
                <View>
                    <Text style={styles.heading}>Trending</Text>
                </View>
                <TrendingNewsCard
                    data={NewsData}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {
                            useNativeDriver: false,
                        }
                    )}
                />
                <Paginator data={NewsData} scrollX={scrollX} />
            </View>
            <View style={{ height: '53%', marginBottom: 400 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={styles.heading}>News</Text>
                    <TouchableOpacity style={{ marginStart: 210 }}>
                        <Text style={[styles.heading, { fontSize: 10 }]}>See All</Text>
                    </TouchableOpacity>
                </View>
                <NewsCard
                    data={NewsData}
                />
            </View>


        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    heading: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        paddingStart: 22,
        paddingTop: 5,
        fontSize: 16

    },

});
export default NewsScreen;
