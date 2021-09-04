import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import AppHeader from "./components/appHeader";
import OrderScreen from "./screens/orderScreen";
import { foodList } from "./resources/foodList";

const cuisineList = [
	{ title: "Pizza", isSelected: false },
	{ title: "Chicken", isSelected: false },
	{ title: "Momos", isSelected: false },
	{ title: "Indian", isSelected: false },
	{ title: "Chinese", isSelected: false },
	{ title: "Dessert", isSelected: false },
	{ title: "Biryani", isSelected: false },
	{ title: "Beverage", isSelected: false },
	{ title: "Bengali", isSelected: false },
];

let selectedCuisines = [];

export default function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const [dishes, setDishes] = useState(foodList);
	const [isVegSelected, setIsVegSelected] = useState(false);
	const [isHighRated, setIsHighRated] = useState(false);
	const [noOfSelectedCuisines, setNoOfSelectedCuisines] = useState("");
	const [isItemSelected, setIsItemSelected] = useState(false);
	const [cuisines, setCuisines] = useState(cuisineList);

	const handleSearch = (value) => {
		setSearchQuery(value);
	};

	const handleFilterType = () => {
		setIsVegSelected(!isVegSelected);
	};

	const handleHighRateSelected = () => {
		setIsHighRated(!isHighRated);
	};

	useEffect(() => {
		if (searchQuery == "" && !isVegSelected && !isHighRated) {
			setDishes(foodList);
		} else {
			let filteredFoodList = [...dishes];
			let copiedList = [...filteredFoodList];
			if (searchQuery != "") {
				copiedList = [...filteredFoodList];
				filteredFoodList = filterDishesOnSearch(filteredFoodList);
			} else {
				filteredFoodList = [...copiedList];
			}
			if (isVegSelected) {
				copiedList = [...filteredFoodList];
				filteredFoodList = filterDishesByVeg(filteredFoodList);
			} else {
				filteredFoodList = [...copiedList];
			}
			if (isHighRated) {
				copiedList = [...filteredFoodList];
				filteredFoodList = filterDishesByRating(filteredFoodList);
			} else {
				filteredFoodList = [...copiedList];
			}
			setDishes(filteredFoodList);
		}
	}, [searchQuery, isVegSelected, isHighRated]);

	useEffect(() => {
		for (let dish of dishes) {
			if (dish.count > 0) {
				setIsItemSelected(true);
				break;
			} else {
				setIsItemSelected(false);
			}
		}
	}, [dishes]);

	useEffect(() => {
		for (let cuisine of cuisines) {
			if (cuisine.isSelected) {
				if (!selectedCuisines.includes(cuisine.title)) {
					selectedCuisines.push(cuisine.title);
				}
			} else {
				if (selectedCuisines.includes(cuisine.title)) {
					selectedCuisines.splice(selectedCuisines.indexOf(cuisine.title), 1);
				}
			}
		}
		setNoOfSelectedCuisines(selectedCuisines.length);
		console.log(selectedCuisines);
	}, [cuisines]);

	//Handler for filtering dishes based on searchQuery
	const filterDishesOnSearch = (dishList) => {
		console.log(dishList);
		return dishList.filter((dish) =>
			dish.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
	};

	//Handler for filtering dishes based on veg status
	const filterDishesByVeg = (dishList) => {
		return dishList.filter((dish) => dish.type === "Veg");
	};

	//Handler for filtering dishes based on rating
	const filterDishesByRating = (dishList) => {
		return dishList.filter((dish) => dish.rating >= 4);
	};

	//Handler for item count
	const handleItemCount = (dishKey, countDir) => {
		console.log("here ", dishKey);
		if (countDir === "add") {
			setDishes(
				dishes.map((dish) =>
					dish.key === dishKey ? { ...dish, count: dish.count + 1 } : dish
				)
			);
		} else {
			setDishes(
				dishes.map((dish) =>
					dish.key === dishKey ? { ...dish, count: dish.count - 1 } : dish
				)
			);
		}
	};

	//Handler for checkbox selected
	const handleCheckboxSelected = (cuisineIdx) => {
		setCuisines(
			cuisines.map((cuisine, index) => {
				if (index === cuisineIdx) {
					return {
						...cuisine,
						isSelected: !cuisine.isSelected,
					};
				} else {
					return cuisine;
				}
			})
		);
	};

	//Handler for Clearing Cuisines
	const handleClearCuisines = () => {
		setCuisines(
			cuisines.map((cuisine) => {
				return {
					...cuisine,
					isSelected: false,
				};
			})
		);
		selectedCuisines = [];
		setNoOfSelectedCuisines(0);
	};

	return (
		<View style={styles.container}>
			<AppHeader />
			<OrderScreen
				searchQuery={searchQuery}
				onSearch={handleSearch}
				onFilterType={handleFilterType}
				onHighRateSelected={handleHighRateSelected}
				onCheckboxSelected={handleCheckboxSelected}
				onClearCuisines={handleClearCuisines}
				handleItemCount={handleItemCount}
				isVegSelected={isVegSelected}
				isHighRated={isHighRated}
				dishes={dishes}
				cuisines={cuisines}
				noOfSelectedCuisines={noOfSelectedCuisines}
			/>
			{isItemSelected ? (
				<Button title="Proceed To Checkout" color="#e60544" />
			) : null}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
