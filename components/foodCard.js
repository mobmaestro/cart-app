import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {
	Button,
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
					<Button
						style={{
							width: "60%",
							marginVertical: 10,
							borderColor: "#e60544",
						}}
						labelStyle={{ fontSize: 12 }}
						icon="plus"
						mode="outlined"
						color="#e60544"
					>
						Add
					</Button>
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
