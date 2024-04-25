import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';



const data = [
    { name: 'urgent', value: 200 },
    { name: 'medium', value: 100 },
    { name: 'low', value: 50 },
  ];
  
  const COLORS = [ '#36A2EB', '#FFCE56', 'pink'];

const ChartA = () => {

  const totalValue = data.reduce((sum, { value }) => sum + value, 1);
  const centerPosition = { x: 100, y: 100 }; // Center of the doughnut chart
  const titlePosition = { x: centerPosition.x, y: centerPosition.y }; // Title position
  const margin = { top: 5, left: 5 }; 


  return (
    <div>
        {/* <h2 className='font-bold text-center text-gray-800 text-lg pt-2'>Priority Chart</h2> */}
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
        style={{ fontSize: '14px', color:'#5e5e5e',  fill: '#333'}}
        
      >
        Priority Chart
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

export default ChartA