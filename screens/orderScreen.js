import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Chip, Searchbar } from "react-native-paper";
import FoodCard from "../components/foodCard";
import SelectionModal from "../components/selectionModal";
export default function OrderScreen(props) {
	const [sortDirection, setSortDirection] = useState("");
	const [sortMessage, setSortMessage] = useState("Sort by Price");
	const [showModal, setShowModal] = useState(false);

	return (
		<View style={{ flex: 1 }}>
			<Searchbar
				style={styles.searchBar}
				placeholder="Enter a Dish Name"
				value={props.searchQuery}
				onChangeText={(enteredText) => props.onSearch(enteredText)}
			/>

			<View style={styles.filterContainer}>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{
						width: Dimensions.get("window").width * 1.3,
						justifyContent: "space-between",
					}}
				>
					<Chip
						icon="pizza"
						mode="outlined"
						onPress={props.onFilterType}
						style={{
							borderColor: props.isVegSelected ? "#e60544" : "#999",
							borderWidth: 1,
						}}
					>
						Veg Only
					</Chip>
					<Chip
						icon="star"
						mode="outlined"
						onPress={props.onHighRateSelected}
						style={{
							borderColor: props.isHighRated ? "#e60544" : "#999",
							borderWidth: 1,
						}}
					>
						Rating 4.0 +
					</Chip>
					<Chip
						icon="beer"
						mode="outlined"
						style={{
							borderColor:
								!props.noOfSelectedCuisines == 0 ? "#e60544" : "#999",
							borderWidth: 1,
						}}
						onPress={() => setShowModal(true)}
					>
						{props.noOfSelectedCuisines == 0
							? "Cuisine"
							: `Cusines (${props.noOfSelectedCuisines})`}
					</Chip>
					<Chip
						icon={
							sortDirection === ""
								? "swap-vertical"
								: sortDirection === "asc"
								? "arrow-up"
								: "arrow-down"
						}
						mode="outlined"
					>
						{!props.selectedType
							? `Price: ${sortMessage}`
							: props.selectedDishType}
					</Chip>
				</ScrollView>
			</View>
			<View style={{ flex: 1 }}>
				<ScrollView>
					{props.dishes.map((dish) => (
						<FoodCard
							key={dish.key}
							color={dish.type === "Veg" ? "green" : "#e60544"}
							name={dish.name}
							dishType={dish.dishType}
							price={dish.price}
							rating={dish.rating}
							count={dish.count}
							onAddItem={() => props.handleItemCount(dish.key, "add")}
							onDelItem={() => props.handleItemCount(dish.key, "del")}
						/>
					))}
				</ScrollView>
			</View>
			{showModal ? (
				<SelectionModal
					cuisines={props.cuisines}
					noOfSelectedCuisines={props.noOfSelectedCuisines}
					onCheckboxSelected={props.onCheckboxSelected}
					onApplyCuisine={() => setShowModal(false)}
					onClearCuisines={props.onClearCuisines}
				/>
			) : null}
		</View>
	);
}
const styles = StyleSheet.create({
	searchBar: {
		borderWidth: 0.5,
		borderColor: "#999",
		borderRadius: 15,
		margin: 5,
	},
	filterContainer: {
		margin: 5,
	},
});
