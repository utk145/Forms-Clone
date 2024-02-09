import { Link, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { Button, Card, HelperText, TextInput, useTheme } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalInfoSchema, PersonalInfo } from "../../src/schema/checkout.schema";


export default function PersonalDetails() {

    const { control, handleSubmit, formState: { errors } } = useForm<PersonalInfo>(
        {
            resolver: zodResolver(PersonalInfoSchema)
        }
    );
    console.log(errors);

    const router = useRouter()
    const nextPage = (data) => {
        console.log(data);
        router.push("/checkout/delivery")
    }

    const theme = useTheme()
    // console.log(theme);




    return (
        <ScrollView contentContainerStyle={{ gap: 25 }} showsVerticalScrollIndicator={false}>
            <Card style={{ backgroundColor: theme.colors.background }}>

                <Card.Title title="Personal Details" titleVariant="titleLarge" />

                <Card.Content style={{ gap: 15 }} >



                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { value, onChange, onBlur }, fieldState: { error, invalid } }) => (
                            <>
                                <TextInput placeholder="John Doe"
                                    label={"Name"}
                                    // style={{ backgroundColor: "white" }}
                                    style={{ backgroundColor: theme.colors.background }}
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    error={invalid}
                                />
                                <HelperText type="error" visible={invalid}>
                                    {error?.message}
                                </HelperText>
                            </>
                        )}

                    />

                    <TextInput placeholder="follow-utk145@github.com"
                        label={"Email"}
                        style={{ backgroundColor: "white" }}
                    />

                </Card.Content>

            </Card>
            <Button mode="contained" onPress={handleSubmit(nextPage)}>Next</Button>
        </ScrollView>
    )
}