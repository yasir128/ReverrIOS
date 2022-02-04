import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import YourFavMentorList from '../../../Componants/HomeScreenComponants/SavedScreenComponants/YourFavMentorList';
import YourLibrary from '../../../Componants/HomeScreenComponants/SavedScreenComponants/YourLibrary';
import SavedCourses from '../../../Componants/HomeScreenComponants/SavedScreenComponants/SavedCourses';
const SavedScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.screen}>
            <View style={styles.mentors}>
                <YourFavMentorList />
            </View>
            <View style={styles.mentors}>
                <YourLibrary />
            </View>
            <View style={styles.mentors}>
                <SavedCourses />
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    mentors: {
        marginTop: 10,
        paddingHorizontal: 5
    }
});
export default SavedScreen;
