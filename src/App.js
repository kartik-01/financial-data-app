import React, { useState, useEffect } from 'react';
import { fetchIncomeStatements } from './services/api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';


const App = () => {
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
      console.log('Fetching data...');
      const incomeStatements = await fetchIncomeStatements();
      console.log('Fetched data:', incomeStatements);
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
            <img src="/images/valueglance-logo.png" alt="Logo" className="h-9 w-auto" />
              <span className="ml-4 text-xl font-semibold text-[#162055]">Apple Financial Data</span>
            </div>
              <div className="flex items-center space-x-3">
              <button
                onClick={() => window.location.href = 'https://valueglance.com/register'}
                className="w-[106.19px] h-[42px] bg-[#162055] text-white rounded-lg transition-all duration-200 hover:shadow-md text-sm font-medium"
              >
                Sign Up
              </button>
              <button
                onClick={() => window.location.href = 'https://valueglance.com/login'}
                className="w-[106.19px] h-[42px] text-[#162055] border border-[#162055] hover:text-gray-700 transition-all duration-200 hover:shadow-sm rounded-lg text-sm font-medium"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
      

      {/* Main Content */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/content-background.jpg')" }}
        />
        
        {/* Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters Section */}
          <div className="backdrop-blur-sm rounded-lg shadow-sm border p-6 mb-6 bg-transparent relative z-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium text-[#1a1f36] mb-2">Date Range</label>
                <div className="relative">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    className="w-full border rounded-md p-2 focus:ring-[#1a1f36] focus:border-[#1a1f36] bg-transparent"
                    placeholderText="Start Date"
                    portalId="root"
                    popperClassName="z-[9999]"
                    popperPlacement="bottom-start"
                  />
                </div>
                <div className="relative">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    className="w-full border rounded-md p-2 mt-2 focus:ring-[#1a1f36] focus:border-[#1a1f36] bg-transparent"
                    placeholderText="End Date"
                    portalId="root"
                    popperClassName="z-[9999]"
                    popperPlacement="bottom-start"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1f36] mb-2">Revenue Range</label>
                <input
                  type="number"
                  value={minRevenue}
                  onChange={(e) => setMinRevenue(e.target.value)}
                  placeholder="Min Revenue"
                  className="w-full border rounded-md p-2 mb-2 focus:ring-[#1a1f36] focus:border-[#1a1f36] bg-transparent"
                />
                <input
                  type="number"
                  value={maxRevenue}
                  onChange={(e) => setMaxRevenue(e.target.value)}
                  placeholder="Max Revenue"
                  className="w-full border rounded-md p-2 focus:ring-[#1a1f36] focus:border-[#1a1f36] bg-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1f36] mb-2">Net Income Range</label>
                <input
                  type="number"
                  value={minNetIncome}
                  onChange={(e) => setMinNetIncome(e.target.value)}
                  placeholder="Min Net Income"
                  className="w-full border rounded-md p-2 mb-2 focus:ring-[#1a1f36] focus:border-[#1a1f36] bg-transparent"
                />
                <input
                  type="number"
                  value={maxNetIncome}
                  onChange={(e) => setMaxNetIncome(e.target.value)}
                  placeholder="Max Net Income"
                  className="w-full border rounded-md p-2 focus:ring-[#1a1f36] focus:border-[#1a1f36] bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="backdrop-blur-sm rounded-lg shadow-sm border overflow-hidden bg-transparent relative z-10">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <div className="min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200/30">
                    <thead className="bg-transparent">
                      <tr>
                        {['date', 'revenue', 'netIncome', 'grossProfit', 'eps', 'operatingIncome'].map((column) => (
                          <th
                            key={column}
                            className="px-6 py-3 text-left text-xs font-medium text-[#1a1f36] uppercase tracking-wider cursor-pointer hover:bg-white/10"
                            onClick={() => handleSort(column)}
                          >
                            {column.charAt(0).toUpperCase() + column.slice(1)}
                            {sortBy === column && (sortOrder === 'asc' ? ' ▲' : ' ▼')}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-transparent divide-y divide-gray-200/30">
                      {filteredData.map((item, index) => (
                        <tr key={index} className="hover:bg-white/10">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1a1f36]">{item.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1a1f36]">${item.revenue.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1a1f36]">${item.netIncome.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1a1f36]">${item.grossProfit.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1a1f36]">${item.eps.toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1a1f36]">${item.operatingIncome.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default App;
