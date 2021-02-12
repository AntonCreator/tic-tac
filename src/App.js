import React from "react"
import Zero from "./components/zero"
import Cross from "./components/cross"

class App extends React.Component{
  constructor(props){
    super(props)
   
    this.state = {
      field : Array(9).fill(null),
      role: 0
    }
  

  this.winList = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
  ]
}
  
  checkWinner = () => {
    let c = (this.state.role % 2 === 0) ? "0" :  "x";
    for ( let i = 0; i < 8; i++ ){
      let winLine = this.winList[i];
      if  ( this.state.field[winLine[0]] === c
         && this.state.field[winLine[1]] === c 
         && this.state.field[winLine[2]] === c){
        
        alert(c + " THE WIN😜")
        this.newGame()
      }
    }
    }
  

 handleClick = ( event ) => {
   let data = event.target.getAttribute("data");
   let curfield = this.state.field;
   if (curfield[data] === null){
   curfield[data] =  ( this.state.role%2 === 0 ) ? "0" : "x" ;
   this.setState({ role : this.state.role + 1 })
   this.setState({ field : curfield })
   this.checkWinner();
   this.checkDraw();
   } else {
     alert("play by the rules!");
   } 
   
  }
  
  checkDraw = () => { if(
    this.state.field.every(x => x !==null) && this.checkWinner){
      alert( "😄DRAW😃" )
    } 
  }

  newGame = () =>{
    this.setState({
      field : Array(9).fill(null),
      role: 0
    })
  }

  render() {
    
    return(
      <div className="game">
      <h1><em>tic-tac-toe</em></h1>
      <div className="shet">
        
        <div className = "cell" onClick = {this.handleClick} data = "0" >{this.state.field[0] === "0" ? <Zero /> : this.state.field[0] == "x" ? <Cross /> : ""}</div>
        <div className = "cell" onClick = {this.handleClick} data = "1" >{this.state.field[1] === "0" ? <Zero /> : this.state.field[1] == "x" ? <Cross /> : ""}</div>
        <div className = "cell" onClick = {this.handleClick} data = "2" >{this.state.field[2] === "0" ? <Zero /> : this.state.field[2] == "x" ? <Cross /> : ""}</div>
        <div className = "cell" onClick = {this.handleClick} data = "3" >{this.state.field[3] === "0" ? <Zero /> : this.state.field[3] == "x" ? <Cross /> : ""}</div>
        <div className = "cell" onClick = {this.handleClick} data = "4" >{this.state.field[4] === "0" ? <Zero /> : this.state.field[4] == "x" ? <Cross /> : ""}</div>
        <div className = "cell" onClick = {this.handleClick} data = "5" >{this.state.field[5] === "0" ? <Zero /> : this.state.field[5] == "x" ? <Cross /> : ""}</div>
        <div className = "cell" onClick = {this.handleClick} data = "6" >{this.state.field[6] === "0" ? <Zero /> : this.state.field[6] == "x" ? <Cross /> : ""}</div>
        <div className = "cell" onClick = {this.handleClick} data = "7" >{this.state.field[7] === "0" ? <Zero /> : this.state.field[7] == "x" ? <Cross /> : ""}</div>
        <div className = "cell" onClick = {this.handleClick} data = "8" >{this.state.field[8] === "0" ? <Zero /> : this.state.field[8] == "x" ? <Cross /> : ""}</div>
         
        </div>
        <button onClick={this.newGame} className="btn-newGame">NEW GAME</button>
        </div>
     
    )
  }

}

export default App;
