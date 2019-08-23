import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Dimensions,
	Image,
	Text,
	ImageBackground,
} from 'react-native';
import InputML from '../components/InputML';
import ButtonML from '../components/ButtonML';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			senha: '',
		};
	}

	handleNavigate = () => {
		/*const {navigation} = this.props;
		navigation.navigate('ChoiceProfile');*/
	};

	render() {
		return (
			<ImageBackground
				source={require('../../assets/img/miles.jpg')}
				style={{width: '100%', height: '100%'}}>
				<View style={styles.container}>
					<View style={styles.headerContainer}>
						<Image
							style={styles.logo}
							source={require('../../assets/img/mylist-vertical-light.png')}
						/>
					</View>
					<View style={styles.subContainer}>
						<View style={styles.form}>
							<InputML
								placeholder="E-mail"
								autoCompleteType="email"
							/>
							<InputML
								placeholder="Senha"
								secureTextEntry={true}
								autoCompleteType="password"
							/>
							<ButtonML text={'Entrar'} />
						</View>
					</View>
					<View style={styles.footerContainer}>
						<Text style={styles.esqueceuSenhaText}>
							Esqueceu sua senha?
							<Text style={styles.footerLink}> Recupere.</Text>
						</Text>
						<Text style={styles.footerText}>
							Novo usuário?
							<Text style={styles.footerLink}> Inscreva-se </Text>
							aqui.
						</Text>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'rgba(35, 45, 59, 0.95)',
	},
	headerContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	logo: {
		width: width * 0.5,
		height: width * 0.5,
		resizeMode: 'contain',
	},
	subContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	form: {
		width: width * 0.8,
	},
	footerContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: 25,
	},
	footerText: {
		color: '#FFFFFF',
		marginTop: 15,
	},
	footerLink: {
		color: '#4FB948',
	},
	esqueceuSenhaText: {
		color: '#FFFFFF',
	},
});
