import { useRouter } from "expo-router";
import { Alert, ScrollView } from "react-native";
import { Button, Card, Checkbox, HelperText, TextInput, useTheme } from "react-native-paper";
import { DatePickerInput } from 'react-native-paper-dates';
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { PaymentInfo, PaymentInfoSchema } from "../../src/schema/checkout.schema";
import ControllerComp from "../../src/components/Controller.Component";
import { useCheckoutContext } from "../../src/context/checkout.context";

export default function PaymentDetails() {

    const { control, handleSubmit } = useForm<PaymentInfo>({
        resolver: zodResolver(PaymentInfoSchema)
    })

    const { setPayment, onSubmitAll } = useCheckoutContext();

    const router = useRouter()
    const nextPage = async (data: PaymentInfo) => {
        // console.log(data);   
        // setPayment(data);
        const success = await onSubmitAll(data);
        if (success) {
            router.push("/")
        } else {
            Alert.alert("Something went wrong while submitting the form")
        }
    }

    // const [inputDate, setInputDate] = useState(undefined)
    // const [isChecked, setIsChecked] = useState(false)

    return (
        <ScrollView
            contentContainerStyle={{ gap: 25 }}
            showsVerticalScrollIndicator={false}>
            <Card style={{ backgroundColor: useTheme().colors.background }}>
                <Card.Title title='Payment Details' titleVariant="titleLarge" />
                <Card.Content style={{ gap: 15 }}>
                    <ControllerComp
                        control={control}
                        name="cardNumber"
                        labelName={"Card Number"}
                        inputPlaceholder="XXX3 XXXX 75XX 0X3"
                        placeholderTextColor={"#778899"}
                    />
                    <ControllerComp
                        control={control}
                        name="expiryDate"
                        labelName={"Expiration date"}
                        inputPlaceholder="mm/yyyy"
                    />

                    {/* <DatePickerInput
                        locale="en"
                        label="Card Expiry"
                        value={inputDate}
                        onChange={(d) => setInputDate(d)}
                        inputMode="start"
                        animationType="slide"
                        iconSize={35}
                        style={{ backgroundColor: useTheme().colors.background }}
                    /> */}
                    <ControllerComp
                        control={control}
                        name="securityCode"
                        labelName={"CVV"}
                        style={{ backgroundColor: useTheme().colors.background }}
                    />


                    {/*
                        <Checkbox
                            status={isChecked ? "checked" : "unchecked"}
                            color="green"
                            onPress={() => setIsChecked(!isChecked)}
                        /> 
                        <Text>Save payment information</Text>

                    */}
                    <Controller
                        control={control}
                        name="saveInfo"
                        render={
                            (
                                {
                                    field: { name, onChange, value },
                                    fieldState: { invalid, error }
                                }
                            ) => (
                                <>
                                    <Checkbox.Item
                                        label="Save payment information"
                                        status={value ? "checked" : "unchecked"}
                                        color="green"
                                        onPress={() => onChange(!value)}
                                        uncheckedColor="purple"
                                        position="trailing"
                                        mode="android"
                                    />
                                    <HelperText type="error" visible={invalid}>
                                        {error?.message}
                                    </HelperText>
                                </>
                            )}

                    />

                </Card.Content>
            </Card>

            <Button mode="contained" onPress={handleSubmit(nextPage)}>Submit</Button>

        </ScrollView>
    )
}