import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppHeader from "./components/appHeader";
import OrderScreen from "./screens/orderScreen";
import FoodCard from "./components/foodCard";
import { foodList } from "./resources/foodList";

const types = ["Veg", "Non-Veg"];
const dishtypes = [
	"Pizza",
	"Momos",
	"Chicken",
	"Indian",
	"Chinese",
	"Biryani",
	"Dessert",
	"Beverage",
];
export default function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const [dishes, setDishes] = useState(foodList);
	const [selectedType, setSelectedTypes] = useState("");
	const [selectedDishTypes, setSelectedDishTypes] = useState("");

	const handleSearch = (value) => {
		setSearchQuery(value);
	};

	return (
		<View style={styles.container}>
			<AppHeader />
			<OrderScreen
				searchQuery={searchQuery}
				onSearch={handleSearch}
				selectedType={selectedType}
				selectedDishTypes={selectedDishTypes}
				dishes={dishes}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
