import { useRouter } from "expo-router";
import { ScrollView } from "react-native";
import { Button, Card, useTheme } from "react-native-paper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalInfoSchema, PersonalInfo } from "../../src/schema/checkout.schema";
import ControllerComp from "../../src/components/Controller.Component";
import { useCheckoutContext } from "../../src/context/checkout.context";


export default function PersonalDetails() {

    const { control, handleSubmit, formState: { errors } } = useForm<PersonalInfo>(
        {
            resolver: zodResolver(PersonalInfoSchema)
        }
    );
    console.log(errors);

    const { test } = useCheckoutContext();
    console.log(test);
    

    const router = useRouter()
    const nextPage = (data: any) => {
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

                    <ControllerComp
                        control={control}
                        name="name"
                        labelName="Name"
                        inputPlaceholder="John Doe"
                    />

                    <ControllerComp
                        control={control}
                        name="email"
                        labelName="Email"
                        inputPlaceholder="follow-utk145@github.com"
                    />

                </Card.Content>

            </Card>
            <Button mode="contained" onPress={handleSubmit(nextPage)}>Next</Button>
        </ScrollView>
    )
}