import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function CheckoutStack() {
    return (
        <>
            <StatusBar backgroundColor="#673ab8" style="light" hideTransitionAnimation="none" />
            <Stack screenOptions={{
                contentStyle: {
                    padding: 15,
                    backgroundColor: "#f0ebf8",
                    flex: 1
                },
                headerStyle: {
                    backgroundColor: "#673ab8"
                },
                headerTitleStyle: {
                    color: "#f0ebf8"
                },
                headerTintColor: "#f0ebf8"
            }}>
                <Stack.Screen name="personal" options={{ title: "Personal Information", headerTitleAlign: "center" }} />
                <Stack.Screen name="delivery" options={{ title: "Delivery Information", headerTitleAlign: "center" }} />
                <Stack.Screen name="payment" options={{ title: "Payment Information", headerTitleAlign: "center" }} />
            </Stack>
        </>

    )
}