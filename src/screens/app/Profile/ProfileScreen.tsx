import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Pencil } from "lucide-react-native";
import { AppAvatar, AppButton, AppText, AppTextInput, ScreenContainer } from "@/components";
import { useUser, useToast, useTheme, useThemedStyles } from "@/hooks";
import { createStyles, createIconProps } from "./styles";

export function ProfileScreen() {
  const {user, isInitializing, updateUser, updateUserPhoto} = useUser();
  const { showToast } = useToast();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const iconProps = createIconProps(colors);

  const [name, setName] = useState("");
  const [selectedImageUri, setSelectedImageUri] = useState<string | null>(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  if (isInitializing) {
    return (
      <ScreenContainer>
        <View style={styles.loadingContainer}>
          <AppText>Carregando perfil...</AppText>
        </View>
      </ScreenContainer>
    );
  }

  if (!user) {
    return (
      <ScreenContainer>
        <View style={styles.emptyContainer}>
          <AppText>Não foi possível carregar seu perfil.</AppText>
        </View>
      </ScreenContainer>
    );
  }

  const trimmedName = name.trim();
  const hasNameChanged = trimmedName !== user.name;
  const hasImageChanged = selectedImageUri !== null;

  const canSave = (hasNameChanged || hasImageChanged) && trimmedName.length > 0 && !isSaving;

const handleSave = async () => {
  if (!canSave) {
    return;
  }

  setIsSaving(true);

  try {
    if (hasNameChanged) {
      await updateUser({ name: trimmedName });
    }

    if (hasImageChanged && selectedImageUri) {
      await updateUserPhoto(selectedImageUri);
    }

    setName(trimmedName);
    setSelectedImageUri(null);
    setIsEditingName(false);

    showToast({type: "success", message: "Perfil atualizado com sucesso."});
  } catch (error) {
    console.error("Failed to update user profile", error);
    showToast({type: "error", message: "Não foi possível atualizar o perfil."});
  } finally {
    setIsSaving(false);
  }
};

  const handleCancelEdit = () => {
    setName(user.name);
    setSelectedImageUri(null);
    setIsEditingName(false);
  };

  const handlePickImage = async () => {
    if (isSaving) {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (result.canceled) {
      return;
    }
    const selectedAsset = result.assets[0];

    if (!selectedAsset) {
      return;
    }
    setSelectedImageUri(selectedAsset.uri);
  };

  const imageUri = selectedImageUri ?? user.photoURL;

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <AppAvatar
            imageUri={imageUri}
            size="xl"
            onPress={() => void handlePickImage()}
            accessibilityLabel="Alterar foto de perfil"
          />
        </View>

        <View style={styles.form}>
          {isEditingName ? (
            <AppTextInput
              label="Nome"
              value={name}
              onChangeText={setName}
              autoFocus
              editable={!isSaving}
              returnKeyType="done"
              onSubmitEditing={() => {if (canSave) {void handleSave()}}}
            />
          ) : (
            <View style={styles.displayField}>
              <View style={styles.displayContent}>
                <AppText variant="caption">Nome</AppText>
                <AppText>{user.name}</AppText>
              </View>

              <Pressable
                onPress={() => setIsEditingName(true)}
                style={({ pressed }) => [styles.editButton, pressed && styles.pressed]}
                accessibilityRole="button"
                accessibilityLabel="Editar nome"
              >
                <Pencil {...iconProps} />
              </Pressable>
            </View>
          )}

          <View style={styles.displayField}>
            <View style={styles.displayContent}>
              <AppText variant="caption">Email</AppText>
              <AppText>{user.email}</AppText>
            </View>
          </View>

          {canSave || isEditingName ? (
            <View style={styles.actions}>
              <AppButton
                title={isSaving ? "Salvando..." : "Salvar alterações"}
                onPress={() => void handleSave()}
                disabled={!canSave}
              />

              <AppButton
                title="Cancelar"
                variant="secondary"
                onPress={handleCancelEdit}
                disabled={isSaving}
              />
            </View>
          ) : null}
        </View>
      </View>
    </ScreenContainer>
  );
}