import {
  Appearance,
  FlatList,
  Linking,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Colors } from "@/constants/Colors";
import { PROJECTS } from "@/constants/Projects";

export default function Projects() {
    const colorScheme = Appearance.getColorScheme()

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
    
    const styles = createStyles(theme, colorScheme)

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView

    const separatorComp = <View style={styles.separator} />
    
    const footerComp = <View style={{ height: 10 }} />

    const handleProjectPress = (url, string) => {
    if (url) Linking.openURL(url);
  };

    return (
       <Container>
      <FlatList
        data={PROJECTS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={separatorComp}
        ListFooterComponent={footerComp}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => handleProjectPress(item.link)}
          >
            <View style={styles.textContainer}>
              <Text style={styles.projectTitle}>{item.title}</Text>
              <Text style={styles.projectDescription}>{item.description}</Text>
              {item.techStack && (
                <Text style={styles.techStack}>Tech: {item.techStack}</Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </Container>
    )
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
      contentContainer: {
      paddingTop: 40,
      paddingBottom: 220,
      paddingHorizontal: 18,
      backgroundColor: theme.background,
      alignItems: 'center',
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === 'dark' ? '#334155' : '#cbd5e1',
      width: '70%',
      maxWidth: 340,
      marginBottom: 18,
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      minWidth: 300,
      maxWidth: 640,
      borderWidth: 1,
      borderColor: colorScheme === 'dark' ? '#475569' : '#e2e8f0',
      borderRadius: 20,
      overflow: 'hidden',
      backgroundColor:
        colorScheme === 'dark'
          ? 'rgba(30,41,59,0.9)'
          : 'rgba(241,245,249,0.9)',
      shadowColor: '#0ea5e9',
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 6,
      marginBottom: 20,
    },
    textContainer: {
      flex: 1,
      paddingVertical: 16,
      paddingHorizontal: 20,
    },
    projectTitle: {
      fontSize: 24,
      fontWeight: '800',
      color: theme.text,
      marginBottom: 8,
      letterSpacing: 1,
    },
    projectDescription: {
      fontSize: 15,
      color: theme.textSecondary || theme.text,
      marginBottom: 10,
      lineHeight: 22,
    },
    techStack: {
      fontSize: 13,
      fontStyle: 'italic',
      color: theme.textSecondary || theme.text,
    },
    })
}