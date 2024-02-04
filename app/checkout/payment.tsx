import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function PaymentDetails() {

    const router = useRouter()
    const nextPage = () => {
        router.push("/")
    }


    return (
        <ScrollView contentContainerStyle={{ gap: 25 }} showsVerticalScrollIndicator={false}>
            <Text>Payment</Text>
            <Button mode="contained" onPress={nextPage}>Submit</Button>
        </ScrollView>
    )
}