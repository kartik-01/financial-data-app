import React from 'react';
import DatePicker from 'react-datepicker';

const MainContent = ({ 
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
  sortOrder}) => {
  return (
          <div className="relative pt-4 pb-6">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/content-background.jpg')" }}
            />
            
            {/* Content Layer */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Filters Section */}
              <div className="backdrop-blur-sm rounded-lg shadow-sm border border-[#cfcfcf] p-6 mb-6 bg-transparent relative z-50">
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
                      className="w-full border border-[#cfcfcf] rounded-md p-2 focus:ring-[#1a1f36] focus:border-[#1a1f36] bg-transparent placeholder-gray-600"
                      placeholderText="Start Date"
                      portalId="root"
                      popperClassName="z-[9999]"
                      popperPlacement="bottom-start"
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      dateFormat="MM/dd/yyyy"
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
                      className="w-full border border-[#cfcfcf] rounded-md p-2 mt-2 focus:ring-[#1a1f36] focus:border-[#1a1f36] bg-transparent placeholder-gray-600"
                      placeholderText="End Date"
                      portalId="root"
                      popperClassName="z-[9999]"
                      popperPlacement="bottom-start"
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      dateFormat="MM/dd/yyyy"
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
                      className="w-full border border-[#cfcfcf] rounded-md p-2 mb-2 focus:ring-[#1a1f36] focus:border-[#1a1f36] bg-transparent placeholder-gray-600"
                    />
                    <input
                      type="number"
                      value={maxRevenue}
                      onChange={(e) => setMaxRevenue(e.target.value)}
                      placeholder="Max Revenue"
                      className="w-full border border-[#cfcfcf] rounded-md p-2 focus:ring-[#1a1f36] focus:border-[#1a1f36] bg-transparent placeholder-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1a1f36] mb-2">Net Income Range</label>
                    <input
                      type="number"
                      value={minNetIncome}
                      onChange={(e) => setMinNetIncome(e.target.value)}
                      placeholder="Min Net Income"
                      className="w-full border border-[#cfcfcf] rounded-md p-2 mb-2 focus:ring-[#1a1f36] focus:border-[#1a1f36] bg-transparent placeholder-gray-600"
                    />
                    <input
                      type="number"
                      value={maxNetIncome}
                      onChange={(e) => setMaxNetIncome(e.target.value)}
                      placeholder="Max Net Income"
                      className="w-full border border-[#cfcfcf] rounded-md p-2 focus:ring-[#1a1f36] focus:border-[#1a1f36] bg-transparent placeholder-gray-600"
                    />
                  </div>
                </div>
              </div>
    
              {/* Table Section */}
              <div className="backdrop-blur-sm rounded-lg shadow-sm border border-[#cfcfcf] p-6 mb-6 bg-transparent relative z-50">
                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                  <div className="min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-[#cfcfcf]">
                        <thead className="bg-transparent">
                          <tr>
                            {[
                              { key: 'date', display: 'Date' },
                              { key: 'revenue', display: 'Revenue' },
                              { key: 'netIncome', display: 'Net Income' },
                              { key: 'grossProfit', display: 'Gross Profit' },
                              { key: 'eps', display: 'EPS' },
                              { key: 'operatingIncome', display: 'Operating Income' }
                            ].map((column) => (
                              <th
                                key={column.key}
                                className="px-6 py-3 text-left text-xs font-medium text-[#1a1f36] uppercase tracking-wider cursor-pointer hover:bg-white/10"
                                onClick={() => handleSort(column.key)}
                              >
                                {column.display}
                                {sortBy === column.key && (sortOrder === 'asc' ? ' ▲' : ' ▼')}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-transparent divide-y divide-[#cfcfcf]">
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
  );
};

export default MainContent;
