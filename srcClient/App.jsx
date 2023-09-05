import React, { useEffect, useState } from "react";
import { DeviceThemeProvider, SSRProvider } from '@salutejs/plasma-ui';
import { Container } from '@salutejs/plasma-ui/components/Grid';
import { Tabs, TabItem } from '@salutejs/plasma-ui';
import {
  createSmartappDebugger,
  createAssistant,
} from "@sberdevices/assistant-client";

//import { AssistantAppState, CharacterId } from '@salutejs/client';

import "./App.css";
import {Phrase1} from './components/Phrase1';

import { createGlobalStyle } from 'styled-components';
import { text, background, gradient } from "@salutejs/plasma-tokens";
import { darkJoy, darkEva, darkSber, lightSber, lightEva, lightJoy } from "@salutejs/plasma-tokens/themes";

const ThemeBackgroundEva = createGlobalStyle(darkEva);
const ThemeBackgroundSber = createGlobalStyle(darkSber);
const ThemeBackgroundJoy = createGlobalStyle(darkJoy);
const ThemeBackgroundSber2 = createGlobalStyle(lightSber);

const DocStyles = createGlobalStyle`  
  html {    
    color: ${text};    
    background-color: ${background};  
    background-image: ${gradient};
    /** необходимо залить градиентом всю подложку */    
    min-height: 100vh;  
  }`;

const initializeAssistant = (getState/*: any*/) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }
  return createAssistant({ getState });
};


export class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor');

    this.state = {
      notes: [],
      phrase: [{id:0},{id:1},{id:2}],
      lang: 0,
      //phraseE: {},
      //phraseF: {},
      //phraseG: {},
    }
    //My components
    //const items = [{ label: 'Eng' }, { label: 'Ger' }, { label: 'Fra' }];
    //const [index, setIndex] = useState(0);
    //

    this.assistant = initializeAssistant(() => this.getStateForAssistant() );
    this.assistant.on("data", (event/*: any*/) => {
      console.log(`assistant.on(data)`, event);
      const { action } = event
      this.dispatchAssistantAction(action);
    });
    this.assistant.on("start", (event) => {
      console.log(`assistant.on(start)`, event);
    });

  }
  
  
  componentDidMount() {
    console.log('componentDidMount');
  }

  getStateForAssistant () {
    //console.log('getStateForAssistant: this.state:', this.state)
    const state = {
      item_selector: {
        items: this.state.notes.map(
          ({ id, title }, index) => ({
            number: index + 1,
            id,
            title,
          })
        ),
      },
    };
    console.log('getStateForAssistant: state:', state)
    return state;
  }

  dispatchAssistantAction (action) {
    //console.log('dispatchAssistantAction', action);
    if (action) {
      switch (action.type) {
        case 'show_phrase':
          return this.show_phrase(action);
        
        default:
          throw new Error();
      }
    }
  }

  show_phrase (action) {
    //console.log('show_phrase', action);
    this.state.lang = action.lang;
    this.setState({
      phrase: [
        {
          title:     action.titleE,
          descr:     action.descrE,
          phon:     action.phonE,
        },
        {
          title:     action.titleF,
          descr:     action.descrF,
          phon:     action.phonF,
        },
        {
          title:     action.titleG,
          descr:     action.descrG,
          phon:     action.phonG,
        },
      ]
    })
  }

  render() {
    //console.log('render');
    return (
      
      <div>
        
         {
      <Phrase1
      //phrase = {this.state.phrase[this.state.lang]}
      phraseE = {this.state.phrase[0]}
      phraseF = {this.state.phrase[1]}
      phraseG = {this.state.phrase[2]}
      sendData = {this.assistant.sendData}
      lang = {this.state.lang}
      sesId = {Math.random()}
      />
      }
      <DocStyles  />
     
      </div>
      )
  }


}

