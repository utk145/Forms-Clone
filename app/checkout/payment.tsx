import { useRouter } from "expo-router";
import { ScrollView } from "react-native";
import { Button, Card, Checkbox, TextInput, useTheme } from "react-native-paper";
import { DatePickerInput } from 'react-native-paper-dates';
import { useState } from "react";

export default function PaymentDetails() {

    const router = useRouter()
    const nextPage = () => {
        router.push("/")
    }

    const [inputDate, setInputDate] = useState(undefined)
    const [isChecked, setIsChecked] = useState(false)

    return (
        <ScrollView
            contentContainerStyle={{ gap: 25 }}
            showsVerticalScrollIndicator={false}>
            <Card style={{ backgroundColor: useTheme().colors.background }}>
                <Card.Title title='Payment Details' titleVariant="titleLarge" />
                <Card.Content style={{ gap: 15 }}>
                    <TextInput
                        label={"Card Number"}
                        style={{ backgroundColor: useTheme().colors.background }}
                        placeholder="XXX3 XXXX 75XX 0X3"
                        // placeholder="XXXX XXXX XXXX XXX"
                        placeholderTextColor={"#778899"}
                    />
                    {/* <TextInput
                        label={"Expiration date"}
                        placeholder="mm/yyy"
                        style={{ backgroundColor: useTheme().colors.background }}
                    /> */}

                    <DatePickerInput
                        locale="en"
                        label="Card Expiry"
                        value={inputDate}
                        onChange={(d) => setInputDate(d)}
                        inputMode="start"
                        animationType="slide"
                        iconSize={35}
                        style={{ backgroundColor: useTheme().colors.background }}
                    />
                    <TextInput
                        label={"CVV"}
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

                    <Checkbox.Item
                        label="Save payment information"
                        status={isChecked ? "checked" : "unchecked"}
                        color="green"
                        onPress={() => setIsChecked(!isChecked)}
                        uncheckedColor="purple"
                        position="trailing"
                        mode="android"
                    />

                </Card.Content>
            </Card>

            <Button mode="contained" onPress={nextPage}>Submit</Button>

        </ScrollView>
    )
}