import React,{Component} from 'react';
import Card from './component/card.js';
import './css/cardzone.css';

class Cardzone extends Component {
    stage = {
        card:null
    }

    // async componentDidMount(){
    //         let data = await this.props.cards.map( card => {
    //             return(
    //                 <div className="cardarea">
    //                     <Card
    //                         index={card.index}
    //                         title={card.title}
    //                         content={card.content}
    //                     />
    //                 </div>
    //             );
    //         });
    //         console.log(data);
    //         this.setState({card:data});
    //         console.log(this.state.card);
    // }

    componentWillMount(){
            let data = this.props.cards.map( card => {
                return(
                    <div className="cardarea">
                        <Card
                            id={card.id}
                            title={card.title}
                            content={card.detail}
                            remove={this.props.remove}
                            edit={this.props.edit}
                        />
                    </div>
                );
            });
            this.setState({card:data});
    }

    render() { 
        return (
            <div className="cardzone">
                {this.state.card}
                {/* <div className=""></div> */}
            </div>
        );
    }
}

export default Cardzone;