
import React from 'react'
import { BarChart, Bar, Cell, } from 'recharts';
import { LineChart, Line,Pie,PieChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useCart from '../../../Hooks/useCart';
import { Link } from 'react-router-dom';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const Recharts = ({item}) => {
  const [cart, refetch] = useCart();
  // console.log(cart)

   // custom shape for the bar chart
   const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
  return (
    <div className=' py-10 mx-auto '>

      <span className='text-2xl text-purple-300'>ReChart Analytics</span>



      {/* <LineChart  width={600} height={500} data={cart}

      >
        <Line type="monotone" dataKey="resale_price" stroke="#8884d8" activeDot={{ r: 8 }} />
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>

      </LineChart> */}


      <div className="">
                    <BarChart
                        width={600}
                        height={400}
                        
                        data={cart}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Bar dataKey="resale_price" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {cart.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
    
    
    </div>

  

  )
}

export default Recharts
