
import { ClerkProvider, ClerkLoaded, useAuth } from '@clerk/clerk-expo'
import { tokenCache } from '@/cache'
import React from 'react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ConvexReactClient } from 'convex/react'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!)

if (!publishableKey) {
    throw new Error("Missing publishable key. please set in .env")
}

export default function ClerkAndConvexProvider({ children }: { children: React.ReactNode }) {

    return (
        <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <ClerkLoaded>{children}</ClerkLoaded>
            </ConvexProviderWithClerk>

        </ClerkProvider>
    )
}