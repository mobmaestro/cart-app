import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
	Modal,
	Text,
	Button,
	Headline,
	Divider,
	Checkbox,
} from "react-native-paper";

export default function SelectionModal(props) {
	return (
		<Modal
			visible={true}
			onDismiss={props.onModalClose}
			contentContainerStyle={styles.container}
		>
			<Headline
				style={{
					fontSize: 22,
					color: "#636363",
					marginVertical: 10,
				}}
			>
				Select Cuisine Type
			</Headline>
			<ScrollView>
				{props.cuisines.map((cuisine, index) => (
					<Checkbox.Item
						key={index}
						label={cuisine.title}
						status={cuisine.isSelected ? "checked" : "unchecked"}
						color="#e60544"
						onPress={() => props.onCheckboxSelected(index)}
					/>
				))}
			</ScrollView>
			<View
				style={{
					flexDirection: "row",
					padding: 10,
					justifyContent: "space-between",
				}}
			>
				<Button
					style={{ width: "40%" }}
					mode="contained"
					color="#e60544"
					disabled={props.noOfSelectedCuisines == 0}
					onPress={props.onClearCuisines}
				>
					Clear All ({props.noOfSelectedCuisines})
				</Button>
				<Button
					style={{ width: "40%" }}
					mode="contained"
					color="green"
					onPress={props.onApplyCuisine}
				>
					Apply
				</Button>
			</View>
		</Modal>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		height: "100%",
		padding: 20,
		justifyContent: "flex-start",
	},
});
