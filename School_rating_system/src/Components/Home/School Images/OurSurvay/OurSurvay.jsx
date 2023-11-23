import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';


import './survay.css'






const data = [
    { value: 30, label: 'S-Agree' },
    { value: 50, label: 'Agree' },
    { value: 15, label: 'Neutral' },
    { value: 5, label: 'DisAgree' },
  ];
  

function OurSurvay() {
  return (
    <div>
       <div className='OurSurvay'>
        <h1>Our Suvey</h1>
        <p className='text-lg font-bold'>Regarding this School Rating Web Application</p>
       <div >

       <PieChart 
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray'},
        },
      ]}
      height={200} 
    />
        <p className='p-4 m-2 bg-gray-400 text-xl rounded border'>The majority of respondents either strongly agree or agree regarding the School Rating Web Application, constituting 80% of the responses. A smaller portion, 15%, expresses a neutral stance, while another 5% disagree to some extent.</p>
          </div>
       </div>
    </div>
  )
}

export default OurSurvay

