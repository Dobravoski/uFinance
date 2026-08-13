import { useRef, useState } from "react";
import { Modal, Pressable, View, useWindowDimensions } from "react-native";
import { AppText } from "../AppText";
import { styles } from "./styles";
import type { AppDropdownProps } from "./types";

interface TriggerPosition {
  top: number;
  bottom: number;
  right: number;
}

const DROPDOWN_OFFSET = 4;
const DROPDOWN_HEIGHT_THRESHOLD = 160;

export function AppDropdown({options, children}: AppDropdownProps) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<TriggerPosition | null>(null);

  const triggerRef = useRef<View>(null);

  const { height: screenHeight, width: screenWidth } = useWindowDimensions();

  function handleOpen() {
    triggerRef.current?.measureInWindow((x, y, width, height) => {
        setPosition({top: y, bottom: y + height, right: x + width});
        setVisible(true);
    });
  }

  function handleClose() {
    setVisible(false);
  }

  function handleOptionPress(onPress: () => void) {
    handleClose();
    onPress();
  }

  function getDropdownPosition() {
    if (!position) {
      return undefined;
    }

    const spaceBelow = screenHeight - position.bottom;
    const shouldOpenAbove = spaceBelow < DROPDOWN_HEIGHT_THRESHOLD;
    const right = Math.max(screenWidth - position.right, 0);

    if (shouldOpenAbove) {
      return {bottom: screenHeight - position.top + DROPDOWN_OFFSET, right};
    }

    return {top: position.bottom + DROPDOWN_OFFSET, right};
  }

  return (
    <>
      <View ref={triggerRef} collapsable={false} style={styles.trigger}>
        <Pressable onPress={handleOpen}>
          {children}
        </Pressable>
      </View>

      <Modal visible={visible} transparent animationType="fade" onRequestClose={handleClose}>
        <Pressable style={styles.overlay} onPress={handleClose}>
          {position && (
            <View style={[styles.dropdown, getDropdownPosition()]}>
              {options.map((option) => (
                <Pressable key={option.label} onPress={() => handleOptionPress(option.onPress)} style={styles.option}>
                  <AppText variant="label" style={option.destructive ? styles.destructiveText : styles.optionText}>
                    {option.label}
                  </AppText>
                </Pressable>
              ))}
            </View>
          )}
        </Pressable>
      </Modal>
    </>
  );
}