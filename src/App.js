import './App.css';
import React from 'react';

function MyFirstComp(props){
  var names_ages= props.names_ages;
  var names=[]
  var ages=[]
  for (let i = 0; i < names_ages.length; i++) {
    names.push(names_ages[i].name)
    ages.push(names_ages[i].age)
  }
  let uniquenames = names.filter((element, index) => {
    return names.indexOf(element) === index;
  });
  let uniqueages = ages.filter((element, index) => {
    return ages.indexOf(element) === index;
  });
  var mappedarr= uniquenames.map(function (item, idx){ // i used it directly since both arrays have the same length and sorted 
    return{
        name: item,
        age: uniqueages[idx]
    }
  })
  return(
    <div>
     <ul>
     {
          mappedarr.map((item,idx)=>{
            return <li key={idx}> {item.name} {item.age}</li>
          })
          
        
        }
     </ul>
    </div>
  )
      }
class App extends React.Component {
  constructor(props){ // first one compiled in mount phase
    super(props) 
    this.state= {namesages:
      [{name: 'Ahmad', age: 30},
      {name: 'Yousef', age: 12},
      {name: 'Shatha', age: 14},
      {name: 'Rana', age: 22},
      {name: 'Osama', age: 22},
      {name: 'Ahmad', age: 38}]

    }
    this.namesages=this.namesages.bind(this)
  }
  
  namesages(){
  this.setState(prevState => ({
    namesages: prevState.namesages.slice(0,-1)
  }));
}
  render(){
      return (
      <div>
        <div>
          <MyFirstComp names_ages={this.state.namesages}/>
        </div>
        <div>
          <button onClick={this.namesages}>delete the last name and age</button>
        </div>
      </div>
    );
  }
}
export default App;
