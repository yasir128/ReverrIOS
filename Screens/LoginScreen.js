import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useContext, useState } from 'react';
import AppColors from '../Constaint/AppColors';
import InputField from '../Componants/InputField';
import CustomBtn from '../Componants/CustomBtn';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Navigations/AuthProvider';

const LoginScreen = () => {

    var [isSecure, setisSecure] = useState(true);
    const [email, setEmail] = useState("");
    const [emailerror, setemailerror] = useState(false);
    const [passerror, setpasserror] = useState(false);
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigation = useNavigation();

    const IsEmpty = () => {

        if (email === "") {
            setemailerror(true)
        } else {
            if (password === "") {
                setpasserror(true);
            } else {
                login(email, password);
            }
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <View style={styles.pageInfo}>
                    <Text style={[styles.Text, { fontSize: 24, color: AppColors.FontsColor, marginBottom: 13 }]}>Login</Text>
                    <Text style={[styles.Text, { fontSize: 14, color: AppColors.infoFonts }]}>Welcome back!</Text>
                    <Text style={[styles.Text, { fontSize: 14, color: AppColors.infoFonts }]}>Please login to continue</Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <InputField
                        iconName="envelope"
                        placeholder='Enter Email'
                        size={25}
                        error={emailerror}
                        onChangeText={(e) => {
                            setEmail(e)
                            if (e != "") {
                                setemailerror(false);
                            }
                        }}
                        Title="Email Adress" />
                    <InputField
                        iconName="lock"
                        size={35}
                        error={passerror}
                        secureTextEntry={isSecure}
                        showIcon={isSecure ? 'eye-slash' : 'eye'}
                        showIconolor={AppColors.infoFonts}
                        showIconsize={25}
                        Eyelick={() => { setisSecure((prev) => !prev) }}
                        placeholder='Enter your password'
                        onChangeText={(p) => {
                            setPassword(p)
                            if (p != "") {
                                setpasserror(false)
                            }
                        }}
                        Title="Password" />
                    <CustomBtn
                        Title="Login"
                        onPress={IsEmpty}
                        style={{ marginTop: 20 }}
                    />
                    <TouchableOpacity style={styles.forgetpass}
                        onPress={() => {
                            navigation.navigate("Forgotp")
                        }}
                    >
                        <Text style={styles.fg}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signuplink}>
                    <Text style={{ color: AppColors.infoFonts, fontFamily: "Poppins-Regular", }}>Don’t have an account?</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("UserType")
                    }}>
                        <Text style={{ color: AppColors.FontsColor, fontFamily: "Poppins-Regular", }}>Sign up!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: AppColors.primarycolor
    },
    pageInfo: {
        marginTop: 40,
        marginStart: 30
    },
    Text: {
        fontFamily: "Poppins-Regular"
    },
    forgetpass: {
        marginTop: 40,
        alignItems: 'center',
    },
    fg: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        fontSize: 14
    },
    signuplink: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 120,
        justifyContent: 'center'
    }

});


export default LoginScreen;
