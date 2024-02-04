import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { Button, Card, TextInput, useTheme, RadioButton } from "react-native-paper";

export default function DeliveryDetails() {

    const router = useRouter()
    const nextPage = () => {
        router.push("/checkout/payment")
    }

    const theme = useTheme()

    const [shipping, setShipping] = useState('free');
    // console.log(shipping);

    return (
        // <View style={{ gap: 25 }}>
        <ScrollView contentContainerStyle={{ gap: 25 }} showsVerticalScrollIndicator={false}>
            <Card style={{ backgroundColor: theme.colors.background }}>

                <Card.Title title="Delivery Details" titleVariant="titleLarge" />

                <Card.Content style={{ gap: 15 }} >

                    <TextInput
                        label={"City"}
                        style={{ backgroundColor: theme.colors.background }}
                    />

                    <TextInput
                        label={"Postal Code"}
                        style={{ backgroundColor: theme.colors.background }}
                    />

                    <TextInput
                        label={"Address"}
                        style={{ backgroundColor: theme.colors.background }}
                    />

                </Card.Content>

            </Card>



            <Card style={{ backgroundColor: theme.colors.background }}>

                <Card.Title title="Shipping Options" titleVariant="titleLarge" />

                <Card.Content style={{ gap: 15 }} >
                    <RadioButton.Group value={shipping} onValueChange={(val) => setShipping(val)}>
                        <RadioButton.Item value="free" label="Free" />
                        <RadioButton.Item value="fast" label="Fast" />
                        <RadioButton.Item value="same_day" label="Same day" />
                    </RadioButton.Group>
                </Card.Content>

            </Card>


            <Button mode="contained" onPress={nextPage}>Next</Button>

        </ScrollView >
    )
}