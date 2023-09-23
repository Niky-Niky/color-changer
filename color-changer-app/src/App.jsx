import './App.css';
// import { MyBody } from './components/Body/Body';
import { ThemeChanger } from './components/ColorChanger/ColorChanger';
import { Component } from 'react';

export class App extends Component{
  state = {
    bgc: this.GetThemeColor,
  }
  
GetThemeColor = () => {
  const symbols = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * 16)];
  }
  return color
};

ChangeThemeColor = () => {
  const newColor = this.GetThemeColor();
  return this.setState({bgc: newColor}); 
}
  render(){
    const { bgc } = this.state;
    const containerStyle = {
      backgroundColor: bgc,
      width: "auto",
      height: "auto",
    }
    return(
<body style={containerStyle}>
<ThemeChanger onChange = {this.ChangeThemeColor}/>
</body>
  

      
   
  )
};

};
  

