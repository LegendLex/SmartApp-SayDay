import React, {useState} from "react";
import "../css/flag-icon.css"
import "../App.css";
import { createGlobalStyle } from 'styled-components';
import { text, background, gradient } from "@salutejs/plasma-tokens";
import { DeviceThemeProvider, SSRProvider } from '@salutejs/plasma-ui';
import { Container } from '@salutejs/plasma-ui/components/Grid';
import { Tabs, TabItem, Button } from '@salutejs/plasma-ui';
import { IconDownload } from "@salutejs/plasma-icons";
import { secondary } from "@salutejs/plasma-core";

const DocStyles = createGlobalStyle`  
  html {    
    color: ${text};    
    background-color: ${background};  
    background-image: ${gradient};
    /** необходимо залить градиентом всю подложку */    
    min-height: 100vh;  
  }`;

  export const Phrase1 = (props) => {
    const { phraseE, phraseF, phraseG, sendData, lang, sesId } = props;
  //const items = [{ label: 'Eng' }, { label: 'Ger' }, { label: 'Fra' }];
  //var index = 0;
  //const phrase = [phraseE,phraseG,phraseF];
    const items = [{ label: ' ' }, { label: ' ' }, { label: ' ' }];
    const [index, setIndex] = useState(0);
    const [SI, setSI] = useState(0);
    if (sesId != SI) {setSI(sesId);setIndex(lang);}
    const phraseOut = [{} = phraseE,{} = phraseF,{} = phraseG]; 
    console.log(phraseOut[index].title)
  if (Object.keys(phraseE).length == 0) {
  return (
    <div style="scroll"
      className = "phrase-item" align = "center"
    >
      <h2> <font face="serif" size="21" >Фраза дня</font> </h2>
      
      <box>
        <h1 style = {{ color: "lightgreen"}} align="center">
           <font face="serif" size="21">{ phraseOut[index].title }</font>
       </h1>
           <h3 style = {{ color: "lightgreen"}} align="center" >
           <font face="serif" size="6" style = {{ opacity:".6"}}>{phraseOut[index].phon}</font> </h3>
        <p> </p>
        <p> </p>
        <p> </p>
        <h3 align="top"
        ><font face="serif" size="6"> {phraseOut[index].descr}</font> </h3>
      </box>
    </div>
  )
  }
  else
  { return (
    <div
      className = "phrase-item" align = "center"
    >
      <h2> <font face="serif" size="21" >Фраза дня</font> </h2>
      
      <box>
        <h1 style = {{ color: "lightgreen"}} align="center">
           <font face="serif" size="21" >{ phraseOut[index].title }</font>
       </h1>
           <h3 style = {{ color: "lightgreen"}} align="center" >
           <font face="serif" size="6" style = {{ opacity:".6"}}>{phraseOut[index].phon}</font> </h3>
        <p> </p>
        <p> </p>
        <p> </p>
        <h3 align="top"
        ><font face="serif" size="6"> {phraseOut[index].descr}</font> </h3>
      </box>
    <div style={{zIndex: '0', padding: '30px', marginLeft: 'auto', marginRight: 'auto', position: 'relative'}}>
            <DeviceThemeProvider>
                <SSRProvider>
                <Container>
                    <Tabs
                        size="l"
                        view={"clear"}
                        stretch={true}
                        pilled={true}
                        scaleOnPress={true}
                        outlined={false}
                        index={index}
                        animated={true}
                    >
                      
                            <TabItem
                                key={`eng`}
                                isActive={0 === index}
                                tabIndex={0}
                                onClick={() => {
                                  sendData({ action: { action_id: "EngBut"} });
                                  setIndex(0);
                                }
                              }
                            ><span class="flag-icon flag-icon-gb "> &nbsp; &nbsp;</span>
                                {items[0].label}
                            </TabItem>
                            <TabItem
                                key={`fra`}
                                isActive={1 === index}
                                tabIndex={0}
                                onClick={() => {
                                  sendData({ action: { action_id: "FraBut"} });
                                  setIndex(1);
                                }
                              }
                            ><span class="flag-icon flag-icon-fr "> &emsp;</span>
                                {items[1].label}
                            </TabItem>
                            <TabItem
                                key={`ger:`}
                                isActive={2 === index}
                                tabIndex={0}
                                onClick={() => {
                                  sendData({ action: { action_id: "GerBut"} });
                                  setIndex(2);
                                }
                              }
                            ><span class="flag-icon flag-icon-de "> &nbsp; &nbsp;</span>
                                {items[2].label}
                            </TabItem>            
                    </Tabs>
                </Container>
                </SSRProvider>
            </DeviceThemeProvider>
        </div>
    
      </div>
  )}
}

