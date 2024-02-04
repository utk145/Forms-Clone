import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function DeliveryDetails(){

    const router = useRouter()
    const nextPage = () => {
        router.push("/checkout/payment")
    }

    return(
        <View>
            <Text>Delivery</Text>
            {/* <Link href={'/checkout/payment'}>Next</Link> */}
            <Button mode="contained" onPress={nextPage}>Next</Button>

        </View>
    )
}