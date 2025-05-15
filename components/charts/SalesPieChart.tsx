'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { salesData } from '@/lib/data';

const COLORS = ['#60a5fa', '#34d399', '#f87171'];

const SalesPieChart = () => (
  <div className="w-full h-[400px] bg-white shadow p-4 rounded">
    <h2 className="text-lg font-semibold mb-2">Sales Distribution</h2>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={salesData}
          dataKey="sales"
          nameKey="year"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label
        >
          {salesData.map((_, index) => (
            <Cell key={`${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default SalesPieChart;
