import CardMenu from './CardMenu';


export default function Specials () {
   const recipes = [
        {
            id: 0,
            name: 'Greek Salad',
            img:'./images/greek salad.jpg',
            price: '12.99',
            description: 
            'The famous greek salado of crispy lettuce, peppers, olives'+
            'and our Chicago style feta cheese,'+
            'garnished with crunchy garlic and rosemary croutons.'
        },
        {
            id: 1,
            img: './images/bruchetta.svg',
            name: 'Bruschetta',
            price: '5.99',
            description:
            'Our Bruschetta is made from grilled bread that has been'+
            'smeared with garlic and seasoned with salt and olive oil'
        },
        {
            id: 2,
            img: './images/lemon dessert.jpg',
            name: 'Lemon Dessert',
            price: '5.00',
            description:
            'This comes straight from grandma\'s recibe book,'+
            'every las ingredient has been sourced and'+
            'is an authentic source as can be imagined'
        }
    ]

    const menu = recipes.map(recipe => 
        <CardMenu img = {recipe.img} name = {recipe.name} price = {recipe.price} description = {recipe.description}/>)


    return(
        <section className='Specials'>
            <div>
                <div className='title'>
                    <h2>This week specials!</h2>
                    <button>Online Menu</button>
                </div>
                <div className='menu'>
                    {menu}
                </div>
                
            </div>
        </section>
    )
}