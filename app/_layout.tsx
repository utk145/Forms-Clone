// Since in the latest router we donot have App.js file, we can set up the global providers in this file.

import { Slot } from "expo-router";
import { PaperProvider, MD3LightTheme } from "react-native-paper";

const theme = {
    ...MD3LightTheme,
    roundness: 2,
}

export default function RootLayout() {
    return (
        // <Slot />  // https://docs.expo.dev/router/layouts/        
        <PaperProvider theme={theme}>
            <Slot />
        </PaperProvider>
    )
}