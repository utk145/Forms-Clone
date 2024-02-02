import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function DeliveryDetails(){
    return(
        <View>
            <Text>Delivery</Text>
            <Link href={'/checkout/payment'}>Next</Link>
        </View>
    )
}