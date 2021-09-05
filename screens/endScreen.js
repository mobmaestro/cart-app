import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Caption, Subheading, Title } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
export default function EndScreen(props) {
	return (
		<View style={styles.container}>
			<Icon name="checkmark-circle-outline" size={150} color="green" />
			<Subheading style={{ color: "green", fontWeight: "bold" }}>
				Order Placed
			</Subheading>
			<Title>Thank you for doing business with us</Title>
			<Caption>Your order will be delivered shortly</Caption>
			<Button
				style={{ marginVertical: 20 }}
				mode="contained"
				color="#e60544"
				icon="arrow-left"
				onPress={props.onReturn}
			>
				Back to Main Page
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 30,
	},
});
