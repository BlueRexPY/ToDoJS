import React, {Component} from "react";
import List from "./Components/List";
import Navigation from "./Components/Navigation";
import Title from "./Components/Title";
import BottomNavigation from "./Components/AddItem";
class App extends Component{  
  state = {
    listData :[
      {text: "Wash a dog",done:false,importent:false,id:1},
      {text: "Learn React",done:false,importent:false, id:2},
      {text: "go to the gym",done:false,importent:false,id:3},
    ],
    dones:0,
    filterListData:[
      {text: "Wash a dog",done:false,importent:false,id:1},
      {text: "Learn React",done:false,importent:false, id:2},
      {text: "go to the gym",done:false,importent:false,id:3},
    ],
  }
  
  deleteItem = (id) =>{
    this.setState(({listData})=>{
      const idx = listData.findIndex((el)=>el.id === id)
    
      const newlistData = listData.slice(0,idx).concat(listData.slice(idx +1))
      return{
        listData:newlistData,
        filterListData:newlistData,
      }
    })
  }
  addItem = (toDoText) =>{
    this.setState(({listData})=>{
      const newlistData = listData
      newlistData.push({text: toDoText,done:false,importent:false,id:Date.now()})
      return{
        listData:newlistData,
        filterListData:newlistData
      }
    })
  }

  toggleImportent = (id) =>{
    this.setState(({listData})=>{
      const newItem ={...listData[listData.findIndex((el)=>el.id === id)],importent:!listData[listData.findIndex((el)=>el.id === id)].importent}
      const newlistData = listData.slice(0,listData.findIndex((el)=>el.id === id)).concat(newItem).concat(listData.slice(listData.findIndex((el)=>el.id === id) +1))
    return{
      listData:newlistData,
      filterListData:newlistData
    }
    })
  }
  toggleDone = (id) =>{
    this.setState(({listData})=>{
      let newDones =0
      const newItem ={...listData[listData.findIndex((el)=>el.id === id)],done:!listData[listData.findIndex((el)=>el.id === id)].done}
      const newlistData = listData.slice(0,listData.findIndex((el)=>el.id === id)).concat(newItem).concat(listData.slice(listData.findIndex((el)=>el.id === id) +1))
      for (let i = 0; i < newlistData.length; i++) {
        if (newlistData[i].done === true){
          newDones++
        }
      }
      console.log(this.state.filterListData)
    return{
      listData:newlistData,
      filterListData:newlistData,
      dones:newDones
    }
    })
  }

  showAll = ()=>{
    this.setState(({listData})=>{
      return{
        filterListData:listData,
      }
    })
  }

  showDone = ()=>{
    this.setState(({listData})=>{
      const newFilterlistData=[]
      for (let i = 0; i < listData.length; i++) {
        if (listData[i].done === true){
          newFilterlistData.push(listData[i])
        }
      }
      return{
        filterListData:newFilterlistData
      }
    })
  }
  showActive = ()=>{
    this.setState(({listData})=>{
      const newFilterlistData=[]
      for (let i = 0; i < listData.length; i++) {
        if (listData[i].done === false){
          newFilterlistData.push(listData[i])
        }
      }
      return{
        filterListData:newFilterlistData
      }
    })
  }
  showImportent = ()=>{
    this.setState(({listData})=>{
      const newFilterlistData=[]
      for (let i = 0; i < listData.length; i++) {
        if (listData[i].importent === true){
          newFilterlistData.push(listData[i])
        }
      }
      return{
        filterListData:newFilterlistData
      }
    })
  }
  showSerch = (serchText)=>{
    this.setState(({listData})=>{
      const newFilterlistData=[]
      for (let i = 0; i < listData.length; i++) {
        if (listData[i].text.slice(0,serchText.length).toLowerCase() == serchText.toLowerCase()){
          newFilterlistData.push(listData[i])
        }
      }
      return{
        filterListData:newFilterlistData
      }
    })
  }

  render(){
    return (
      <div className="App">
        <Title all={this.state.listData.length} done={this.state.dones}/>
        <Navigation showAll={this.showAll} showDone={this.showDone} showActive={this.showActive} showImportent={this.showImportent} showSerch={this.showSerch}/>
        <List onDeleted={this.deleteItem} filterListData={this.state.filterListData} onToggleImportent={this.toggleImportent} onToggleDone={this.toggleDone}></List>
        <BottomNavigation onAdd={this.addItem}/>
      </div>
    );
  }
  
}

export default App;
