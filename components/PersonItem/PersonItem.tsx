import React, { useState, useEffect, useCallback, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Character } from "../../types/peopleType";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigation } from "@react-navigation/native";
import * as favouriteActions from '../features/favouriteSlicer';

type Props = {
  person: Character
}

export const PersonItem: React.FC<Props> = ({ person }) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const planets = useAppSelector(state => state.people.itemsPlanets);
  const [isFavourite, setIsFavourite] = useState(false);
  const menFavourites = useAppSelector(state => state.favourite.MenItems);
  const womenFavourites = useAppSelector(state => state.favourite.WomenItems);
  const otherFavourites = useAppSelector(state => state.favourite.OtherItems);

  const homeworld = useMemo(() => {
    return planets.results.find((planet) => planet.url === person.homeworld);
  }, [planets, person.homeworld]);

  useEffect(() => {
    if (menFavourites === 0 && womenFavourites === 0 && otherFavourites === 0) {
      setIsFavourite(false);
    }
  }, [menFavourites, womenFavourites, otherFavourites]);

  const handleFavouriteAdder = useCallback(() => {
    setIsFavourite(!isFavourite);
    if (!isFavourite) {
      if (person.gender === 'male') {
        dispatch(favouriteActions.increaseMenItems());
      } else if (person.gender === 'female') {
        dispatch(favouriteActions.increaseWomenItems());
      } else {
        dispatch(favouriteActions.increaseOtherItems());
      }
    } else {
      if (person.gender === 'male') {
        dispatch(favouriteActions.decreaseMenItems());
      } else if (person.gender === 'female') {
        dispatch(favouriteActions.decreaseWomenItems());
      } else {
        dispatch(favouriteActions.decreaseOtherItems());
      }
    }
  }, [isFavourite, person.gender, dispatch]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('DetailsModal', { character: person })
      }>
      <TouchableOpacity style={styles.heartContainer} onPress={handleFavouriteAdder}>
        <Image
          source={isFavourite ? require('../../assets/full-red-heart.svg') : require('../../assets/red-heart.svg')}
          style={styles.heartIcon}
        />
      </TouchableOpacity>
      <Text style={styles.name}>{person.name}</Text>
      <Text style={styles.gender}>{person.gender}</Text>
      <Text style={styles.homeworld}>{homeworld?.name || 'unknown'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    borderColor: '#5454',
    borderWidth: 1,
    alignItems: 'center'
  },
  heartContainer: {
    width: 59,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heartIcon: {
    width: 20,
    height: 20,
  },
  name: {
    width: 120
  },
  gender: {
    width: 42
  },
  homeworld: {
    width: 60
  }
});
