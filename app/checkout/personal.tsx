import { Link, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { Button, Card, TextInput, useTheme } from "react-native-paper";


export default function PersonalDetails() {

    const router = useRouter()
    const nextPage = () => {
        router.push("/checkout/delivery")
    }

    const theme = useTheme()
    // console.log(theme);




    return (
        <ScrollView contentContainerStyle={{ gap: 25 }} showsVerticalScrollIndicator={false}>
            <Card style={{ backgroundColor: theme.colors.background }}>

                <Card.Title title="Personal Details" titleVariant="titleLarge" />

                <Card.Content style={{ gap: 15 }} >

                    <TextInput placeholder="John Doe"
                        label={"Name"}
                        // style={{ backgroundColor: "white" }}
                        style={{ backgroundColor: theme.colors.background }}
                    />

                    <TextInput placeholder="follow-utk145@github.com"
                        label={"Email"}
                        style={{ backgroundColor: "white" }}
                    />

                </Card.Content>

            </Card>
            <Button mode="contained" onPress={nextPage}>Next</Button>
        </ScrollView>
    )
}