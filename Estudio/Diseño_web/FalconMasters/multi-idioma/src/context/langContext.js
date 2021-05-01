import React, {useState} from 'react';
import MensajesIngles from './../lang/en-US.json'
import MensajesEspanol from './../lang/es-AR.json'
import {IntlProvider} from 'react-intl'

const langContext = React.createContext();

const LangProvider = ({children}) => {
    let localeDefault;
    let mensajesDefault;
    const lang = localStorage.getItem('lang');

    if(lang){
        localeDefault = lang
        if(lang === 'es-MX'){
            mensajesDefault = MensajesEspanol
        } else if (lang === 'en-UK'){
            mensajesDefault = MensajesIngles
        } else {
            localeDefault = 'en-UK'
            mensajesDefault = MensajesIngles
        }
    }

    const [mensajes, establecerMensajes] = useState();
    const [locale, establecerLocale] = useState('en-UK');
    const establecerLenguaje = (lenguaje) => {
        switch(lenguaje){
            case 'es-AR':
                establecerMensajes(MensajesEspanol)
                establecerLocale('es-AR');
                localStorage.setItem('lang', 'es-AR')
            break;
            case 'en-UK':
                establecerMensajes(MensajesIngles)
                establecerLocale('en-UK');
                localStorage.setItem('lang', 'en-UK')
            break;
            default:
                establecerMensajes(MensajesIngles)
                establecerLocale('en-UK');
                localStorage.setItem('lang', 'en-UK')
        }
    }

    return ( 
        <langContext.Provider value={{establecerLenguaje: establecerLenguaje}}>
            <IntlProvider locale={locale} messages={mensajes}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}
 
export {LangProvider, langContext};