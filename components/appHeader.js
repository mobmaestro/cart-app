import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";
export default function AppHeader() {
	return (
		<View>
			<Appbar.Header style={styles.headerContainer}>
				<Appbar.Content style={styles.headerContent} title="Yomato" />
			</Appbar.Header>
		</View>
	);
}
const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: "#e60544",
	},
	headerContent: {
		marginTop: 10,
		marginBottom: 10,
	},
});
