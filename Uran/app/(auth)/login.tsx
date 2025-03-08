import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/styles/auth.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme'
import { useRouter } from 'expo-router'
import { useSSO } from '@clerk/clerk-expo'

import bro from "@/assets/images/bro.png"

export default function login() {

    const {startSSOFlow} = useSSO();
    const router = useRouter();

    const handleGoogleSignIn = async () => {
        try {
            const {createdSessionId, setActive} = await startSSOFlow({strategy:"oauth_google"})
            if (setActive && createdSessionId){
                setActive({session:createdSessionId})
                router.replace("/(tabs)/profile")
            }
        } catch (error){

        }
    }
  return (
    <View style={styles.container}>

        {/* BRAND SECTION */}
        <View style={styles.brandSection}>
            <View style={styles.logoContainer}>
            <Ionicons name="leaf" size={32} colors={COLORS.primary} />
            </View>
            <Text style={styles.appName}>URAN</Text>
            <Text style={styles.tagline}>Don't miss anything</Text>
        </View> 
        
        {/* ILLUSTRATION */}

        <View style={styles.illustrationContainer}>
            <Image source={bro} style={styles.illustration} resizeMode='contain' />
        </View>

        {/* LOGIN SECTION */}

        <View style={styles.loginSection}>
            <TouchableOpacity style={styles.googleButton} onPress={() => {handleGoogleSignIn()}} activeOpacity={0.9}>
                <View style={styles.googleIconContainer}>
                    <Ionicons name="logo-google" size={28} color={COLORS.surface} />
                </View>
                <Text style={styles.termsText}>By continuing, you agree to our Terms and Privacy Policy</Text>
            </TouchableOpacity>
        </View>
      <Text>login</Text>
    </View>
  )
}