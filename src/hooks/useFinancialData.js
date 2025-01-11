import { useState, useEffect } from 'react';
import { fetchIncomeStatements } from '../services/api';

export const useFinancialData = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [minRevenue, setMinRevenue] = useState('');
  const [maxRevenue, setMaxRevenue] = useState('');
  const [minNetIncome, setMinNetIncome] = useState('');
  const [maxNetIncome, setMaxNetIncome] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    const loadData = async () => {
      const incomeStatements = await fetchIncomeStatements();
      setData(incomeStatements);
      setFilteredData(incomeStatements);
    };
    loadData();
  }, []);

  useEffect(() => {
    let result = [...data];

    if (startDate && endDate) {
      result = result.filter(
        (item) =>
          new Date(item.date) >= startDate && new Date(item.date) <= endDate
      );
    }

    if (minRevenue !== '') {
      result = result.filter((item) => item.revenue >= Number(minRevenue));
    }
    if (maxRevenue !== '') {
      result = result.filter((item) => item.revenue <= Number(maxRevenue));
    }

    if (minNetIncome !== '') {
      result = result.filter((item) => item.netIncome >= Number(minNetIncome));
    }
    if (maxNetIncome !== '') {
      result = result.filter((item) => item.netIncome <= Number(maxNetIncome));
    }

    result.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredData(result);
  }, [data, startDate, endDate, minRevenue, maxRevenue, minNetIncome, maxNetIncome, sortBy, sortOrder]);

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  return {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    minRevenue,
    setMinRevenue,
    maxRevenue,
    setMaxRevenue,
    minNetIncome,
    setMinNetIncome,
    maxNetIncome,
    setMaxNetIncome,
    filteredData,
    handleSort,
    sortBy,
    sortOrder
  };
};
