import Footer from "../Footer.jsx";
import TeamIndividual from "./TeamIndividual";
import 'animate.css';


export default function OurTeam() {
  return (
<>

<div className="main">
  <div className="aboutUs">
    <div className="inner-content">
      <h1>About Us</h1><br />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, at debitis aspernatur eum mollitia magni ad cum laborum tenetur asperiores veniam accusamus? A accusantium recusandae sunt provident doloremque rem numquam? Ullam sit sed mollitia unde neque quia, error itaque porro? Assumenda aperiam quaerat ullam temporibus vel ducimus distinctio, dicta omnis, eum iusto hic, quis quidem maxime dolorem. Sapiente, doloribus ipsum?</p>
    </div>
  </div>

<div className="ourTeam">
  <h1 className="text-white p-2">Our Team</h1>
      <div className="inner">
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
    </div>
    </div>

   
<Footer/>
</>
  )
}
