import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
// import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)

  const favoriteMeals = MEALS.filter((meal) =>
  favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.textView}>
          <Text style={styles.text}>
            You have no favorite meals yet.
          </Text>
        </View>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textView: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white', 
    padding: 16 
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
