// src/components/ui/ProgressBar.tsx
import { StyleSheet, View } from "react-native";

type ProgressBarProps = {
  value: number; // 0-100
  color?: string;
  height?: number;
};

export function ProgressBar({ value, color = "#4caf50", height = 8 }: ProgressBarProps) {
  return (
    <View style={[styles.container, { height }]}>
      <View style={[styles.filled, { width: `${value}%`, backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    overflow: "hidden",
  },
  filled: {
    height: "100%",
    borderRadius: 4,
  },
});
