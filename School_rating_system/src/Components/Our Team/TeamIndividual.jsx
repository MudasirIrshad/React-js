import './style.css'
export default function TeamIndividual(props) {
  return (
    <div >
        
            <div className='mainCard'>
            <img src={props.img} alt={props.alt} />
            <h1>{props.name}</h1>
            <h2>{props.designation}</h2>
<br />
            <p>{props.intro}</p>
            
            </div>
        
    </div>
  )
}
