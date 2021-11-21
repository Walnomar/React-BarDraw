import React from 'react';  
import { Button } from './button';


export class Draw extends React.Component {
    handleDraw() {
    const messagein = "Don't put ur shoes on."
    const messageout = "WOOOWOO"
    var draw = Math.random() < 0.5 ? messagein : messageout;

        if (draw === messagein) {
            alert(messagein)
        } else {
            alert(messageout)
        }
    }

        render() { 
            return <Button onClick={this.handleDraw} />;
        }
    
}