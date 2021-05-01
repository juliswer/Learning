import React, {useContext} from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import './styles.css';
import {IntlProvider, FormattedMessage, FormattedDate} from 'react-intl'
import MensajesIngles from './lang/en-US.json'
import MensajesEspanol from './lang/es-AR.json'
import {langContext} from './context/langContext'

const App = () => {

	const idioma = useContext(langContext);

	return (
		<div>
			<Header />

			<div className="main">
				<h1 className="titulo">
					<FormattedMessage id="app.welcome" defaultMessage="Welcome, Carlos" />
				</h1>
				<p className="subtitulo">
					<FormattedDate 
						value={Date.now()}
						year="numeric"
						month="long"
						day="numeric"
						weekday="long"
					/>
				</p>
				
				<Grid />
			</div>
		</div>
	);
}
 
export default App;