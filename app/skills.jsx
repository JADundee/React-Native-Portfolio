import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import icedCoffeeImg from "@/assets/images/iced-coffee.png"


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          style={styles.headerImage}
          source={icedCoffeeImg}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hours</ThemedText>
      </ThemedView>
      <Collapsible title="Monday to Friday">
        <ThemedText>
          09:00 - 19:00
        </ThemedText>
      </Collapsible>
      <Collapsible title="Saturday">
        <ThemedText>
          10:00 - 17:00
        </ThemedText>
      </Collapsible>
      <Collapsible title="Sunday">
        <ThemedText>
          Closed.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});