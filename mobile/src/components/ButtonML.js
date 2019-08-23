import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

export default class ButtonML extends Component {
	render() {
		const {text} = this.props;
		return (
			<Button
				titleStyle={styles.textButton}
				buttonStyle={styles.button}
				title={text}
				onPress={() => console.warn('Oi')}
			/>
		);
	}
}

const styles = StyleSheet.create({
	gradientButton: {
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.16,
		shadowRadius: 3,
		elevation: 10,
	},
	button: {
		backgroundColor: '#4FB948',
	},
	textButton: {
		color: '#fff',
		fontWeight: 'bold',
		paddingTop: 5,
		paddingBottom: 5,
	},
});
