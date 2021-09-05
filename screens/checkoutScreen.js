import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableWithoutFeedback,
	ScrollView,
} from "react-native";
import { Button, Card, Divider, Paragraph, Title } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

const deliveryCharges = 30;

export default function CheckoutScreen(props) {
	const [total, setTotal] = useState(0);
	const [taxes, setTaxes] = useState(0);
	const [grandTotal, setGrandTotal] = useState(0);
	useEffect(() => {
		let totalSpent = 0;
		props.selectedDishes.map((dish) => {
			totalSpent += dish.price * dish.count;
		});
		setTotal(totalSpent.toFixed(2));
	}, [props.selectedDishes]);

	useEffect(() => {
		setTaxes((total * 0.05).toFixed(2));
	}, [total]);

	useEffect(() => {
		const gt = +total + +deliveryCharges + +taxes;
		setGrandTotal(gt.toFixed(2));
	}, [taxes]);

	return (
		<View style={{ flex: 1 }}>
			<TouchableHighlight onPress={props.onPressBack} underlayColor="#e6e8e6">
				<View style={styles.btnContainer}>
					<Icon
						name="arrow-back-outline"
						size={15}
						color="#807e7e"
						style={{ marginVertical: 2, marginHorizontal: 5 }}
					/>
					<Text style={styles.backBtn}>Go Back</Text>
				</View>
			</TouchableHighlight>
			<Divider />
			<TouchableWithoutFeedback>
				<View style={styles.btnContainer}>
					<Icon
						name="alarm-outline"
						size={15}
						color="green"
						style={{ marginVertical: 2, marginHorizontal: 5 }}
					/>
					<Text style={{ fontSize: 14, color: "#807e7e" }}>
						Delivery in <Text style={styles.backBtn}>20 mins</Text>
					</Text>
				</View>
			</TouchableWithoutFeedback>
			<Divider />
			<ScrollView>
				<Card>
					<Card.Content style={styles.spaceView}>
						{props.selectedDishes.map((dish) => (
							<View style={styles.contentContainer} key={dish.key}>
								<View style={{ flexDirection: "row" }}>
									<Icon
										style={{ marginVertical: 2, marginHorizontal: 5 }}
										name="radio-button-on-outline"
										color={dish.type === "Veg" ? "green" : "#e60544"}
										size={15}
									/>
									<View>
										<Paragraph style={{ fontWeight: "bold" }}>
											{dish.name}
											<Paragraph> x {dish.count}</Paragraph>
										</Paragraph>
										<Paragraph style={{ fontWeight: "bold" }}>
											&#8377; {dish.price}
										</Paragraph>
									</View>
								</View>
								<Paragraph style={{ fontWeight: "bold" }}>
									&#8377; {dish.price * dish.count}
								</Paragraph>
							</View>
						))}
					</Card.Content>
					<Divider />
				</Card>
				<Card>
					<Title
						style={{ ...styles.backBtn, fontSize: 16, marginHorizontal: 10 }}
					>
						Offers
					</Title>
					<Card.Content style={styles.spaceView}>
						<View style={styles.contentContainer}>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Icon
									style={{ marginHorizontal: 5 }}
									name="medical-outline"
									color="#4281f5"
									size={15}
								/>
								<Paragraph>Select a promo code</Paragraph>
							</View>
							<Button
								mode="text"
								color="#e60544"
								labelStyle={{
									fontSize: 12,
									marginHorizontal: 0,
									textTransform: "none",
								}}
							>
								View Offers
							</Button>
						</View>
					</Card.Content>
					<Divider />
				</Card>
				<Card>
					<Card.Content style={styles.spaceView}>
						<View style={styles.contentContainer}>
							<Paragraph style={{ marginHorizontal: 5 }}>Item Total</Paragraph>
							<Paragraph>&#8377; {total}</Paragraph>
						</View>
						<View style={styles.contentContainer}>
							<Paragraph style={{ marginHorizontal: 5 }}>
								Delivery Charges
							</Paragraph>
							<Paragraph>&#8377; {deliveryCharges.toFixed(2)}</Paragraph>
						</View>
						<View style={styles.contentContainer}>
							<Paragraph style={{ marginHorizontal: 5 }}>
								Taxes & charges
							</Paragraph>
							<Paragraph>&#8377; {taxes}</Paragraph>
						</View>
						<View style={{ ...styles.contentContainer, marginVertical: 5 }}>
							<Title style={{ marginHorizontal: 5 }}>Grand Total</Title>
							<Title>&#8377; {grandTotal}</Title>
						</View>
					</Card.Content>
					<Divider />
				</Card>
				<Card>
					<Title
						style={{ ...styles.backBtn, fontSize: 16, marginHorizontal: 10 }}
					>
						Your Details
					</Title>
					<Card.Content style={styles.spaceView}>
						<View style={styles.contentContainer}>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Paragraph style={{ marginHorizontal: 5 }}>
									Rahul Chowdhury, 8250315234
								</Paragraph>
							</View>
							<Button
								mode="text"
								color="#e60544"
								labelStyle={{
									fontSize: 12,
									marginHorizontal: 0,
									textTransform: "none",
								}}
							>
								Change
							</Button>
						</View>
					</Card.Content>
				</Card>
			</ScrollView>
			<View
				style={{
					padding: 10,
					alignItems: "center",
				}}
			>
				<Button
					style={{ width: "70%" }}
					mode="contained"
					color="#e60544"
					onPress={props.onPlaceOrder}
				>
					&#8377; {grandTotal}&nbsp;&nbsp;&nbsp;&nbsp;Place Order
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	btnContainer: {
		flexDirection: "row",
		paddingVertical: 10,
		paddingHorizontal: 5,
	},
	backBtn: {
		color: "#807e7e",
		fontWeight: "bold",
		fontSize: 14,
	},
	contentContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingRight: 20,
	},
	spaceView: {
		paddingHorizontal: 5,
		paddingVertical: 10,
	},
});
