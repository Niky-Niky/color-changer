import { Component } from "react";
import { ColorChanger } from "./ColorChanger.styled";
import { ColorChangerDescription } from "./ColorChanger.styled";


export class ThemeChanger extends Component{

render = () => {
    return(
        <ColorChanger onClick = {this.props.onChange}>Change Theme</ColorChanger>
            
        
    )

}
    
}