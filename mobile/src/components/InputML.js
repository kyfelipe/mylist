import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default class InputML extends Component {
	constructor(props) {
		super(props);
	}

	setStyle() {
		return [styles.input, styles.inputBlur];
	}

	render() {
		const {
			placeholder,
			secureTextEntry = false,
			autoCapitalize = 'none',
			autoCompleteType = 'off',
			autoCorrect = true,
			placeholderTextColor = 'rgba(213, 213, 213, 0.5)',
		} = this.props;

		return (
			<TextInput
				placeholder={placeholder}
				style={this.setStyle()}
				autoCapitalize={autoCapitalize}
				secureTextEntry={secureTextEntry}
				autoCompleteType={autoCompleteType}
				autoCorrect={autoCorrect}
				placeholderTextColor={placeholderTextColor}
			/>
		);
	}
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		marginBottom: 20,
	},
	inputBlur: {
		borderColor: '#FFFFFF',
		color: '#FFFFFF',
	},
	inputFocus: {
		borderColor: 'red',
		color: 'red',
	},
});
