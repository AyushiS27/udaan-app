
import { useState, useRef } from "react";
import DeckCard from "../DeckCard";
import './index.css';

const cardMapping = {
    '0' : 'CLUB',
    '1' : 'DIAMOND',
    '2' : 'HEART',
    '3' : 'SPADE'
}


const getDeckList = () => {
    return new Array(52).fill(0).map((item, index) => {
        return { "val" : index,
         type: cardMapping[Math.floor(index/13)],
         label: (index % 13) + 1,
         active: false
        }
    });
}

const randomIntFromInterval = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const getRandomNumber = (result) =>{
    let randomNum = randomIntFromInterval(0, 51);
    if(result.indexOf(randomNum) > -1){
        randomNum =  getRandomNumber(result);
        return randomNum;
    }
    else{
        return randomNum;    
    }
    
}

const fetchCards = (pickList) => {
    let result = pickList, counter = 5;
    while(counter > 0 || result.length === 50){
        result.push(getRandomNumber(result));
        --counter; 
    }
    return result;
}

export default function DeckCardBoard(){
    const deckList = useRef(getDeckList()); 
    const [pickList, setPickList] = useState([]); // This has the cards index number which are shuffled; storing index number and getting list from ref deckList
    const [over, setOver] = useState(false);

    const onDrawCard = () => {
        if(pickList.length < 51){
            let data = fetchCards(pickList);
            setPickList([...data]);
        }
        else{
            setOver(true);
        }   
    }

    
    return(
        <div >
            <button className={'btn-text'} onClick={onDrawCard}>Pick Card</button>
            {over && <div className={'game-over-text'}>Game Over !!</div>}
            <ul className={"deck-container"}>{
                pickList.map((ele) => {
                    
                    return <DeckCard label = {deckList.current[ele].label} type={deckList.current[ele].type} key={deckList.current[ele].val}></DeckCard>
                    
                })
            }</ul>
        </div>
    )
}