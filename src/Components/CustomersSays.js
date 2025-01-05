import Testimonial from './Testimonial';


export default function CustomersSays(){
   
    const evaluations = [
        {
            rank: 3,
            photo: './image/user.jpg',
            name: 'john',
            details: 'teste' 
        },
        {
            rank: 5,
            photo:'',
            name: 'mary',
            details: 'teste2',
        },
        {
            rank: 4,
            photo:'',
            name: 'Gonzalez',
            details:'teste3',
        }


    ]

    const testimonials = evaluations.map(user => 
        <Testimonial rank = {user.rank} photo = {user.photo} name = {user.name} details = {user.details}/>
    )
   
   
   
    return(
        <section className='CustomersSays'>
            <h2>Testimonials</h2>
            <div>
                {testimonials}
            </div>           
        </section>

    )

}