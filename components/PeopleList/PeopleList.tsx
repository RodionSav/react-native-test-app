import { FlatList, View, StyleSheet, Text, Image } from "react-native";
import { ApiResponse, Character } from "../../types/peopleType"
import { PersonItem } from "../PersonItem/PersonItem";

type Props = {
  people: ApiResponse;
}

export const PeopleList: React.FC<Props> = ({ people }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.heartContainer}>
          <Image style={styles.heart} source={require('../../assets/heart.svg')} />
        </View>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.gender}>Gender</Text>
        <Text style={styles.homeworld}>Home</Text>
       </View>
      <FlatList
        data={people.results}
        renderItem={({ item, index }) => (
        <PersonItem key={index} person={item} />
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#5454',
    borderWidth: 1,
    height: 30,
    alignItems: 'center'
  },
  heartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 59,
    height: 35
  },
  heart: {
    objectFit: 'cover'
  },
  name: {
    width: 120,
    marginRight: 5

  },
  gender: {
    width: 46,
    marginRight: 5
  },
  homeworld: {
    width: 60,
    marginLeft: 5
  }
})
