import React, {Component} from 'react';
import './css/content.css';
import Card from './component/card.js';
import Edit from './component/edit.js';
import Cardzone from './cardzone.js';
import { BrowserRouter, Route } from 'react-router-dom'

const data2 = [
    {
        id:1, title:"Physic", detail:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
        id:2, title:"Physic", detail:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
        id:3, title:"Physic", detail:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
        id:4, title:"Physic", detail:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
        id:5, title:"Physic", detail:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    }
]

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[
                {
                    id:1, title:"Physic", detail:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                },
                {
                    id:2, title:"Physic", detail:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                },
                {
                    id:3, title:"Physic", detail:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                },
                {
                    id:4, title:"Physic", detail:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                }
            ]
            
        }
        this.adddata = this.adddata.bind(this);
        this.edit = this.adddata.bind(this);
    }

    adddata = (e) => {
        // console.log(this.state.data);
        const newdata = {id:5, title:"Physic", detail:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}
        this.setState(prevSate=>({
            data:[...prevSate.data, newdata ]
        }))
        
    }

    remove = id => {
        this.setState(state => {
          const data = this.state.data.filter(item => item.id !== id);
          return {
            data,
          };
        });
        // console.log("hello remove laww");
        
    };

    edit = (id, t, d) => {
        console.log("hello edit laww");
        console.log(id+" "+t+" "+d);
        
        this.setState(state => {
            const data = this.state.data.map(item => {
                if(item.id === id){
                    item.title = t
                    item.detail = d
                    return item;
                }
                else return item;
            });
            return {
              data,
            };
        });
        console.log("hello edit laww");
        console.log(id+" "+t+" "+d);
    }

    handleClick() {
        console.log("hello");
        
      }

    render() { 
        return ( 
            <BrowserRouter>
                <div className="content">

                    <div className="top">
                        <div className="left"></div>
                        <div className="right">
                            <button onClick={this.adddata}>Add Data</button>
                            <button onClick={() => this.remove(1)}>Remove Data</button>
                            <button onClick={() => this.edit(1, "t", "d")}>edit Data</button>
                        </div>
                    </div>

                    <div className="bottom">

                        <div className="left"></div>
                        <div className="right">

                            <Route exact path="/" component={() => <Cardzone
                                cards={this.state.data}
                                remove={this.remove}
                                edit={this.edit}
                            />}/>
                            <Route exact path="/edit" component={() => <Edit/>}/>

                        </div>

                    </div>

                </div>
            </BrowserRouter>
        );
    }
}
 
export default Content;