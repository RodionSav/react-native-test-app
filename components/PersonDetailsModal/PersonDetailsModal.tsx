import { useNavigation, useRoute } from "@react-navigation/native"
import { ScrollView, View, Text, Button, StyleSheet } from "react-native"

export const PersonDetailsModal = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { character } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textContainer}>Name: {character.name}</Text>
      <Text style={styles.textContainer}>Height: {character.height}</Text>
      <Text style={styles.textContainer}>Mass: {character.mass}</Text>
      <Text style={styles.textContainer}>Hair Color: {character.hair_color}</Text>
      <Text style={styles.textContainer}>Skin Color: {character.skin_color}</Text>
      <Text style={styles.textContainer}>Eye Color: {character.eye_color}</Text>
      <Text style={styles.textContainer}>Birth Year: {character.birth_year}</Text>
      <Text style={styles.textContainer}>Gender: {character.gender}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Close"
          onPress={() => navigation.goBack()}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  buttonContainer: {
    marginTop: 15
  },
  textContainer: {
    marginBottom: 15
  }
})
