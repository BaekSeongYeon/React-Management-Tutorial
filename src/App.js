
import React,{Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customers=[{
  'id':'1',
  'image':'https://placeimg.com/64/64/any/1',
  'name':'홍길동',
  'birthday':'940720',
  'gender':'남자',
  'job':'학생'
},
{
  'id':'2',
  'image':'https://placeimg.com/64/64/any/2',
  'name':'백길동',
  'birthday':'840720',
  'gender':'남자',
  'job':'학생'
},
{
  'id':'3',
  'image':'https://placeimg.com/64/64/any/3',
  'name':'이길동',
  'birthday':'740720',
  'gender':'남자',
  'job':'학생'
}
]

class App extends Component{
  render() {
   return (
      <div>
      {customers.map(c=>{
          return(
            <Customer 
              key={c.id}
              id={c.id}
              imge={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>
  );
}
}


export default App;
