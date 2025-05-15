'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { salesData } from '@/lib/data';

const SalesLineChart = () => (
  <div className="w-full h-[300px] bg-white shadow p-4 rounded">
    <h2 className="text-lg font-semibold mb-2">Sales Trend Over Years</h2>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={salesData}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="blue" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default SalesLineChart;
