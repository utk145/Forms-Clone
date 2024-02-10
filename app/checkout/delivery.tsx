import {  useRouter } from "expo-router";
import { ScrollView } from "react-native";
import { Button, Card, useTheme, RadioButton, HelperText } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { DeliveryInfo, DeliveryInfoSchema } from "../../src/schema/checkout.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ControllerComp from "../../src/components/Controller.Component";


export default function DeliveryDetails() {

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<DeliveryInfo>(
        {
            resolver: zodResolver(DeliveryInfoSchema),
            defaultValues: { shippingOptions: "free" }
        }
    );

    console.log(errors);


    const router = useRouter()
    const nextPage = (data: any) => {
        console.log(data);
        router.push("/checkout/payment")
    }

    const theme = useTheme()



    return (

        <ScrollView contentContainerStyle={{ gap: 25 }} showsVerticalScrollIndicator={false}>
            <Card style={{ backgroundColor: theme.colors.background }}>

                <Card.Title title="Delivery Details" titleVariant="titleLarge" />

                <Card.Content style={{ gap: 15 }} >

                    <ControllerComp
                        control={control}
                        name="city"
                        labelName="City"
                    />

                    <ControllerComp
                        control={control}
                        labelName={"Postal Code"}
                        name="postalCode"
                    />

                    <ControllerComp
                        control={control}
                        labelName={"Address"}
                        name="address"
                    />

                </Card.Content>

            </Card>



            <Card style={{ backgroundColor: theme.colors.background }}>

                <Card.Title title="Shipping Options" titleVariant="titleLarge" />

                <Card.Content style={{ gap: 15 }} >
                    <Controller
                        control={control}
                        name="shippingOptions"
                        render={
                            ({
                                field: { onChange, value },
                                fieldState: { error, invalid }
                            }) => (
                                <>
                                    <RadioButton.Group value={value}
                                        onValueChange={(val) => onChange(val)}>
                                        <RadioButton.Item value="free" label="Free" />
                                        <RadioButton.Item value="fast" label="Fast" />
                                        <RadioButton.Item value="same_day" label="Same day" />
                                    </RadioButton.Group>
                                    <HelperText type="error" visible={invalid}>
                                        {error?.message}
                                    </HelperText>
                                </>
                            )}
                    />
                </Card.Content>

            </Card>


            <Button mode="contained" onPress={handleSubmit(nextPage)}>Next</Button>

        </ScrollView >
    )
}