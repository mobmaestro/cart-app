import React from "react";
import {
	Image,
	StyleSheet,
	View,
	Text,
	Button,
	TouchableHighlight,
} from "react-native";
import {
	Caption,
	Divider,
	IconButton,
	Paragraph,
	Subheading,
} from "react-native-paper";
import { Rating } from "react-native-ratings";
export default function FoodCard(props) {
	return (
		<View>
			<View style={styles.container}>
				<View style={styles.description}>
					<IconButton
						style={{ margin: 0 }}
						icon="radiobox-marked"
						color={props.color}
						size={15}
					/>
					<Subheading style={{ fontWeight: "bold" }}>{props.name}</Subheading>
					<Caption>In {props.dishType}</Caption>
					<Rating
						readonly
						startingValue={props.rating}
						imageSize={10}
						style={{ alignItems: "flex-start" }}
						ratingCount={5}
					/>
					<Paragraph style={{ fontWeight: "bold" }}>
						Rs. {props.price}
					</Paragraph>
				</View>
				<View style={styles.imageContainer}>
					<Image
						style={styles.foodImage}
						source={require("../assets/food.jpg")}
					/>
					{props.count === 0 ? (
						<View style={{ marginVertical: 10 }}>
							<TouchableHighlight
								style={{
									borderColor: "#e60544",
									borderWidth: 1,
									paddingHorizontal: 15,
									paddingVertical: 8,
									borderRadius: 10,
								}}
								onPress={props.onAddItem}
							>
								<Text style={{ color: "#e60544" }}>+ ADD</Text>
							</TouchableHighlight>
						</View>
					) : (
						<View
							style={{
								flex: 1,
								flexDirection: "row",
								marginVertical: 10,
							}}
						>
							<View>
								<Button
									style={{
										borderRadius: 0,
									}}
									title=" -"
									color="#e60544"
									onPress={props.onDelItem}
								/>
							</View>
							<View
								style={{
									justifyContent: "center",
									padding: 10,
								}}
							>
								<Text
									style={{
										color: "#e60544",
										fontWeight: "600",
										borderRadius: 0,
									}}
								>
									{props.count}
								</Text>
							</View>
							<View style={{ height: "100%" }}>
								<Button
									style={{
										borderRadius: 0,
									}}
									title="+"
									color="#e60544"
									onPress={props.onAddItem}
								/>
							</View>
						</View>
					)}
				</View>
			</View>
			<Divider />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	description: {
		padding: 10,
		width: "70%",
	},
	imageContainer: {
		width: "30%",
		alignItems: "center",
		marginVertical: 5,
	},
	foodImage: {
		width: "80%",
		height: 60,
		borderRadius: 10,
	},
});
