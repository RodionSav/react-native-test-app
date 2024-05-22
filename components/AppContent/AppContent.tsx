import { useEffect } from "react";
import { Button, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import * as peopleActions from '../features/peopleSlicer';
import * as favouriteActions from '../features/favouriteSlicer';
import { PeopleList } from "../PeopleList/PeopleList";


export const AppContent = () => {
  const dispatch = useAppDispatch();

  const people = useAppSelector(state => state.people.items);
  const planets = useAppSelector(state => state.people.itemsPlanets);
  const menFavourites = useAppSelector(state => state.favourite.MenItems);
  const womenFavourites = useAppSelector(state => state.favourite.WomenItems);
  const otherFavourites = useAppSelector(state => state.favourite.OtherItems);

  useEffect(() => {
    dispatch(peopleActions.peopleInit());
    dispatch(peopleActions.planetInit());
    dispatch(peopleActions.speciesInit());
    console.log(planets)
    console.log(people)
  }, [])

  return (
      <View style={styles.container}>
        <View style={styles.favouriteContainer}>
          <View style={styles.favouriteItemContainer}>
            <Text style={styles.favouriteNumber}>{womenFavourites}</Text>
            <Text>Female fans</Text>
          </View>
          <View style={styles.favouriteItemContainer}>
            <Text style={styles.favouriteNumber}>{menFavourites}</Text>
            <Text>Male fans</Text>
          </View>
          <View style={styles.favouriteItemContainer}>
            <Text style={styles.favouriteNumber}>{otherFavourites}</Text>
            <Text>Other fans</Text>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(favouriteActions.resetItems())}
          >
            <Text style={styles.buttonText}>Clear fans</Text>
          </TouchableOpacity>
        </View>
        </View>
        <PeopleList people={people} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favouriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginBottom: 20
  },
  favouriteItemContainer: {
    borderColor: '#5454',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    padding: 5,
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  favouriteNumber: {
    fontSize: 25,
    marginRight: 45,
  },
  buttonContainer: {
    width: 60,
  },
  button: {
    borderColor: '#f65',
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#f65',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
});
