import React,{useState} from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
    { name: 'general enquiry', value: 200 },
    { name: 'refund', value: 150 },
    { name: 'complaints', value: 100 },
    { name: 'payment issues', value: 80 },
    { name: 'repost', value: 100 },
    { name: 'suggestions', value: 200 },
  ];
  
  const COLORS = ['#FFCE56','green', '#FF6384', '#36A2EB','pink', 'black'  ];

const Charts = () => {

  const totalValue = data.reduce((sum, { value }) => sum + value, 0);
  const centerPosition = { x: 100, y: 100 }; // Center of the doughnut chart
  const titlePosition = { x: centerPosition.x, y: centerPosition.y }; // Title position
  const margin = { top: 5, left: 5 }; 


  return (

    <div>
        {/* <h2 className='font-bold text-center text-gray-800 text-lg pt-2'>Category Chart</h2> */}
    
      <PieChart width={350} height={200}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        outerRadius={80}
        innerRadius={55}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <text
        x={titlePosition.x + margin.left}
        y={titlePosition.y + margin.top}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: '14px', color:'#5e5e5e' }}
      >
        Category Chart
      </text>
      <Tooltip />
      <Legend
        layout="vertical"
        align="right"
        verticalAlign="middle"
        iconSize={8}
        iconType="square"
      />
    </PieChart>
  </div>

  )
}

export default Charts