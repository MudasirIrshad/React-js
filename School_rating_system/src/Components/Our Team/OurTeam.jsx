import Footer from "../Footer.jsx";
import TeamIndividual from "./TeamIndividual";
import 'animate.css';


export default function OurTeam() {
  return (
<>
<div className="main">
      <TeamIndividual img="src\Components\Our Team\mudasir.jpg" 
      name="Mudasir Irshad" 
      designation="Software Developer"
      intro="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sunt culpa temporibus perferendis molestiae."/>
      <TeamIndividual img="src\Components\Our Team\haris.jpg" 
      name="Haris Mughal" 
      designation="Software Developer"
      intro="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sunt culpa temporibus perferendis molestiae."/>
      <TeamIndividual img="\src\Components\Our Team\ibrahim.jpg" alt="Img"
      name="Ibrahim Shah" 
      designation="Software Developer"
      intro="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sunt culpa temporibus perferendis molestiae."/>
    </div>

   
<Footer/>
</>
  )
}
