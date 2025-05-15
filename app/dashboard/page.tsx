'use client';

import { useState } from 'react';
import SalesBarChart from '@/components/charts/SalesBarChart';
import SalesPieChart from '@/components/charts/SalesPieChart';
import SalesLineChart from '@/components/charts/SalesLineChart';
import Button from '@/components/atoms/Button';

export default function DashboardPage() {
  const [chartType, setChartType] = useState<'bar' | 'pie' | 'line'>('bar');

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <SalesBarChart />;
      case 'pie':
        return <SalesPieChart />;
      case 'line':
        return <SalesLineChart />;
      default:
        return null;
    }
  };

  return (
    <main>
      <div className="header">Dashboard</div>

      <div className="button-selector">
        <Button
          onClick={() => setChartType('bar')}
          isActive={chartType === 'bar'}
        >
          Bar
        </Button>
        <Button
          onClick={() => setChartType('pie')}
          isActive={chartType === 'pie'}
        >
          Pie
        </Button>
        <Button
          onClick={() => setChartType('line')}
          isActive={chartType === 'line'}
        >
          Line
        </Button>
      </div>

      {renderChart()}
    </main>
  );
}
