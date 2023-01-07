import './Card.css'

function Card(props)  {

    const classes = 'card ' + props.classname;
    
    return (
        <div className={classes}>{props.children}</div>
    );

}

export default Card;