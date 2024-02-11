import { Controller, Control } from "react-hook-form";
import { HelperText, TextInput, useTheme } from "react-native-paper";

type ControllerInputProps = {
    control: Control,
    name: string,
    labelName: string,
    inputPlaceholder?: string,
} & React.ComponentProps<typeof TextInput>;

export default function ControllerComp({ control, name, labelName, inputPlaceholder, ...textinputProps }: ControllerInputProps) {


    return (
        <Controller
            control={control}
            name={name}
            render={
                ({
                    field: { value, onChange, onBlur },
                    fieldState: { error, invalid }
                }) => (
                    <>
                        <TextInput {...textinputProps}
                            placeholder={inputPlaceholder}
                            label={labelName}
                            style={{ backgroundColor: useTheme().colors.background }}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            error={invalid}
                        />
                        <HelperText type="error" visible={invalid} >
                            {error?.message}
                        </HelperText>
                    </>
                )
            }

        />
    )
} 