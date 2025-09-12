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

export default function ProjectsScreen() {
    const colorScheme = Appearance.getColorScheme()

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
    
    const styles = createStyles(theme, colorScheme)

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView

    const separatorComp = <View style={styles.separator} />
    
    const footerComp = <View style={{ height: 40 }} />

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
            {/* <Image
              source={PROJECT_IMAGES[item.id - 1]}
              style={styles.projectImage}
              resizeMode="cover"
            /> */}
          </TouchableOpacity>
        )}
      />
    </Container>
    )
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
       contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
      alignItems: "center",
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#333",
      width: "50%",
      maxWidth: 300,
      marginBottom: 12,
    },
    card: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      maxWidth: 600,
      borderWidth: 1,
      borderColor: colorScheme === "dark" ? "papayawhip" : "#000",
      borderRadius: 16,
      overflow: "hidden",
      backgroundColor: theme.cardBackground || theme.background,
      shadowColor: "#000",
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3,
      marginBottom: 12,
    },
    textContainer: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    projectTitle: {
      fontSize: 20,
      fontWeight: "600",
      color: theme.text,
      marginBottom: 4,
    },
    projectDescription: {
      fontSize: 14,
      color: theme.textSecondary || theme.text,
      marginBottom: 6,
    },
    techStack: {
      fontSize: 12,
      fontStyle: "italic",
      color: theme.textSecondary || theme.text,
    },
    projectImage: {
      width: 100,
      height: 100,
    },
    })
}