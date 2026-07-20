import { useState } from "react";
import { Pressable } from "react-native";
import { PasswordInputProps } from "./types";
import { icon } from "./styles";
import { AppTextInput } from "@/components";
import {Eye, EyeOff} from "lucide-react-native";
import { colors } from "@/theme";


export function PasswordInput({...props}: PasswordInputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible((previous) => !previous)
    }

    const Icon = isPasswordVisible ? EyeOff : Eye;

    const rightAccessory = (
        <Pressable onPress={handleTogglePasswordVisibility} hitSlop={icon.hitSlop}>
            <Icon size={icon.size} color={colors.textSecondary} />
        </Pressable>
    )

    return (
        <AppTextInput {...props} secureTextEntry={!isPasswordVisible} rightAccessory={rightAccessory} />
    )
}