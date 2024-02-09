import { Controller, Control } from "react-hook-form";
import { HelperText, TextInput, useTheme } from "react-native-paper";

type ControllerInputProps = {
    control: Control,
    name: string,
    labelName: string,
    inputPlaceholder: string,
};

export default function ControllerComp({ control, name, labelName, inputPlaceholder }: ControllerInputProps) {


    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error, invalid } }) => (
                <>
                    <TextInput placeholder={inputPlaceholder}
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
            )}

        />
    )
} 