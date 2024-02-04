import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Button, Card, TextInput, useTheme } from "react-native-paper";


export default function PersonalDetails() {

    const router = useRouter()
    const nextPage = () => {
        router.push("/checkout/delivery")
    }

    const theme = useTheme()
    // console.log(theme);




    return (
        <View style={{ gap: 15 }}>
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
        </View>
    )
}