import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function PaymentDetails() {

    const router = useRouter()
    const nextPage = () => {
        router.push("/")
    }


    return (
        <View>
            <Text>Payment</Text>
            <Button mode="contained" onPress={nextPage}>Submit</Button>
        </View>
    )
}