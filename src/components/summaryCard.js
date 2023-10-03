import React from 'react';
import { RadialBarChart, RadialBar } from 'recharts';

const data = [
  {
    name: 'Total Sales',
    value: 560000,
    fill: '#001AFF',
  },
];

const SummaryCard = ({ title, value }) => {
  return (
    <div style={{ flex: 1, height: '100px', margin: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
        <RadialBarChart
          width={68}
          height={68}
          cx={34}
          cy={34}
          innerRadius={30} 
          outerRadius={34}
          barSize={10}
          data={data}
        >
          <RadialBar
            minAngle={15}
            startAngle={90} 
            endAngle={-270} 
            background
            clockWise
            dataKey="value"
          />
          <path d="M34 20 L36 24 L32 24 Z" fill="#000" />  
        </RadialBarChart>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '20px'}}> 
            <p style={{ fontSize: '14px', color:'#8A92A6', margin: 0 }}>{title}</p> 
            <p style={{ fontSize: '24px',  margin: 0 }}>{value}</p>
        </div>
    </div>
  );
}

export default SummaryCard;
