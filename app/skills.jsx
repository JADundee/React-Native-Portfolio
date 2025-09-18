import { StyleSheet, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ProgressBar } from '@/components/ProgressBar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SKILLS } from '@/constants/Skills';

/* import icedCoffeeImg from "@/assets/images/iced-coffee.png" */


export default function Skills() {

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: "#E8E8E8", dark: "#353636" }} headerImage={null} contentContainerStyle={styles.scrollContent}>
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
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  skillRow: {
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.08)', // Glassy panel
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
});