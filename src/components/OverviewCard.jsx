import React, { useContext } from 'react';
import { Card, Statistic } from 'antd';
import { StaffContext } from '../context/StaffContext';

const OverviewCard = () => {
  const { totalBorrowed } = useContext(StaffContext);

  return (
    <Card style={{ textAlign: 'center' }}>
      <Statistic title="Total Borrowed Books" value={totalBorrowed} />
    </Card>
  );
};

export default OverviewCard;