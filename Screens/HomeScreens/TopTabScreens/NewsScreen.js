import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import AppColors from '../../../Constaint/AppColors';
import { NewsData } from '../../../dummy-data/Dummy_News';
import TrendingNewsCard from '../../../Componants/HomeScreenComponants/NewsScreenComponants/TrendingNewsCard';
import NewsCard from '../../../Componants/HomeScreenComponants/NewsScreenComponants/NewsCard';
import Paginator from '../../../Componants/HomeScreenComponants/NewsScreenComponants/Paginator';


const NewsScreen = () => {

    return (
        <View style={styles.screen}>
            <View>
                <View>
                    <Text style={styles.heading}>Trending</Text>
                </View>
                <TrendingNewsCard
                    data={NewsData}
                />
                <Paginator data={NewsData} />
            </View>
            <View style={{ height: '55%', marginBottom: 400 }}>
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
