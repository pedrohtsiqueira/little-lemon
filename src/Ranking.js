

export default function Ranking(props) {
    var rank = props.value;
    const stars = [];
    for(var i = 0; i < 5; i++) {
        stars.push(rank == 0 ? <img src = './images/empty star.png' /> : <img src = './images/filled star.png' />)
        rank == 0 ? rank = 0 : rank-- ;  
    };
    return(
        <div className = 'Ranking'>
            {stars.map(icon => icon)}
        </div>
        
    )

}