'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { salesData } from '@/lib/data';

const SalesBarChart = () => (
  <div className="w-full h-[300px] bg-white shadow p-4 rounded">
    <h2 className="text-lg font-semibold mb-2">Annual Sales (2022–2024)</h2>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={salesData}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#38bdf9" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default SalesBarChart;
