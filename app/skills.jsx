import { StyleSheet, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ProgressBar } from '@/components/ProgressBar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SKILLS } from '@/constants/Skills';

/* import icedCoffeeImg from "@/assets/images/iced-coffee.png" */


export default function SkillsScreen() {
  console.log("SKILLS value:", SKILLS);
SKILLS.forEach((g, i) => console.log(`Group ${i}:`, g));

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: "#E8E8E8", dark: "#353636" }} headerImage={null}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">My Skills</ThemedText>
      </ThemedView>

      {SKILLS.map((group, index) => (
        <Collapsible key={index} title={group.category}>
          {group.items.map((skill, idx) => (
            <View key={idx} style={styles.skillRow}>
              <ThemedText>{skill.name}</ThemedText>
              <ProgressBar value={skill.level} />
            </View>
          ))}
        </Collapsible>
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 10,
  },
  skillRow: {
    marginBottom: 12,
  },
});