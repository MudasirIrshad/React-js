import School from './School'
import Footer from '../Footer'
import './Schoollist'

export default function SchoolList() {
  return (
    <div >
      <div className='Schoollist'>


      <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '10px',
        
          // Media query for screens smaller than 600px
          '@media (min-width: 500px)': {
            flexDirection: 'column',
          }
      }}>
      <School name="Pakturk International Marif" img="src\Components\SchoolLists\Images\Pakturk\Pakturk.jpg" color="red" rating='4.5/5'/>
      <School name="Fauji Foundation Model School" img="src\Components\SchoolLists\Images\FFMS.jpg" color="purple" rating='4/5'/>
      <School name="Beacon House Schools" img="src\Components\SchoolLists\Images\Pakturk\Pakturk.jpg" color="green" rating='3.3/5'/>
      <School name="Islamia Model High School" img="src\Components\SchoolLists\Images\FFMS.jpg" color="red" rating='4/5'/>
      <School name="St Francis Schooling System" img="src\Components\SchoolLists\Images\Pakturk\Pakturk.jpg" color="purple" rating='3/5'/>
      <School name="Pakturk International Marif" img="src\Components\SchoolLists\Images\FFMS.jpg" color="green" rating='3.5/5'/>

      
        </div>




      </div>
      <Footer/>
    </div>
  )
}





