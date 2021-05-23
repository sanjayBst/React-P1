import './Card.css';

const Card = (props) => {
let Class = `card + ${props.className}`;
    return <div className={Class}> {props.children} </div>;
}



export default Card;