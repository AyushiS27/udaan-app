import react from 'react';
import './index.css';


// export default function DeckCard({label, type, key}){
//     console.log("LABEL CARD: ", label);
//     return(
//         <li className={"deck-card"} key ={key}>
//             <div className={'label-card'}>{label}</div>
//             <img src={`./img/${type}.png`} className={'img-ele'}></img>
//         </li>
//     )
// }


export default class DeckCard extends react.PureComponent{
    
    render(){
        
        const {label, type, key} = this.props;
       // console.log("DEck: ", label);
        return(
            <li className={"deck-card"} key ={key}>
                <div className={'label-card'}>{label}</div>
                <img src={`./img/${type}.png`} className={'img-ele'}></img>
            </li>
        )
    }
}

//Convert this to pure components

