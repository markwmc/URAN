
import React from 'react'
import InitialLayout from '@/components/initialLayout'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import ClerkAndConvexProvider from '@/providers/ClerkAndConvexProvider'



export default function RootLayout() {
    return (
        <ClerkAndConvexProvider>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
                    <InitialLayout />
                </SafeAreaView>
            </SafeAreaProvider>
        </ClerkAndConvexProvider>

    )
}