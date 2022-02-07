import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../../Componants/HomeScreenComponants/Header';
import AppColors from '../../Constaint/AppColors';
import { AuthContext } from '../../Navigations/AuthProvider';
import CustomBtn from '../../Componants/CustomBtn';
import TopTabBar from '../../Componants/HomeScreenComponants/TopTabBar';
import ProgressScreen from './TopTabScreens/ProgressScreen';
import auth from "@react-native-firebase/auth";
import NewsScreen from './TopTabScreens/NewsScreen';
import firestore from '@react-native-firebase/firestore';
import ArticleScreen from './TopTabScreens/ArticleScreen';
import SavedScreen from './TopTabScreens/SavedScreen';
import ArticalDetailsScreen from './TopTabScreens/ArticalDetailsScreen';
import MentorsScreen from '../../Componants/HomeScreenComponants/ProgressScreenComponants/MentorsScreen';

const Home = () => {

    const { user, logout } = React.useContext(AuthContext);
    const [Progress, setProgress] = useState(true);
    const [News, setNews] = useState(false);
    const [Article, setArticle] = useState(false);
    const [Saved, setSaved] = useState(false);
    const [ArticalDetails, setArticalDetails] = useState(true);
    const [defaultDp, setdefaultDp] = useState(true);
    const [AllMentors, setAllMentors] = useState(false);
    const [dp, setdp] = useState();
    const [name, setname] = useState();

    const GetUser = async () => {
        const email = await auth().currentUser
        var userEmail = email.email;
        const savedUser = await firestore().collection('Users').doc(userEmail).get();
        var name = savedUser._data.name
        setname(name);
        if (savedUser != undefined) {
            var dpurl = savedUser._data.image
            setdp(dpurl);
            setdefaultDp(false)
        }
    };
    GetUser();




    return (
        <View style={styles.screen}>
            {ArticalDetails ?
                (
                    <View style={{ flex: 1 }}>
                        <Header
                            onPress={() => { logout(); }}
                            Dp={defaultDp}
                            DpUrl={dp}
                        />
                        {AllMentors ? (
                            <MentorsScreen
                                onPress={() => { setAllMentors(false) }}
                            />

                        ) : (
                            <View style={{ flex: 1 }}>
                                <TopTabBar
                                    onPressProgress={() => {
                                        setProgress(true);
                                        setNews(false);
                                        setArticle(false);
                                        setSaved(false);
                                    }}
                                    onPressNews={() => {
                                        setNews(true);
                                        setProgress(false);
                                        setArticle(false);
                                        setSaved(false);
                                        console.log("clecked")
                                    }}
                                    onPressArticle={() => {
                                        setArticle(true);
                                        setNews(false);
                                        setProgress(false);
                                        setSaved(false);
                                    }}
                                    onPressSaved={() => {
                                        setSaved(true);
                                        setNews(false);
                                        setArticle(false);
                                        setProgress(false);
                                    }}
                                    progress={Progress}
                                    news={News}
                                    article={Article}
                                    save={Saved}
                                />
                                <View style={{ flex: 1 }}>
                                    {Progress ?
                                        <ScrollView showsVerticalScrollIndicator={false}>
                                            <ProgressScreen
                                                UserName={name}
                                                onPress={() => { setAllMentors(true) }}
                                            />
                                        </ScrollView>
                                        :
                                        News ?
                                            <NewsScreen /> :
                                            Article ? <ArticleScreen
                                                ArticalDetails={ArticalDetails}
                                                onPress={() => { setArticalDetails(false) }}
                                            /> :
                                                Saved ? <SavedScreen /> : null
                                    }
                                </View>
                            </View>)}
                    </View>
                ) : (
                    <View style={{ flex: 1 }}>
                        <ArticalDetailsScreen
                            BackBotton={() => { setArticalDetails(true) }}
                        />
                    </View>

                )}
        </View>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: AppColors.primarycolor
    }
});

export default Home;
