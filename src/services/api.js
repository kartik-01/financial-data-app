import axios from 'axios';

const API_KEY = '0ce63gD0OIfdl6vtBuy5pDtKxYdifBUq';
const BASE_URL = 'https://financialmodelingprep.com/api/v3';

export const fetchIncomeStatements = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/income-statement-as-reported/AAPL`, {
      params: {
        period: 'annual',
        apikey: API_KEY,
      },
    });
    
    return response.data.map(item => ({
      date: item.date,
      revenue: item.revenuefromcontractwithcustomerexcludingassessedtax,
      netIncome: item.netincomeloss,
      grossProfit: item.grossprofit,
      eps: item.earningspersharediluted,
      operatingIncome: item.operatingincomeloss
    }));
  } catch (error) {
    console.error('Error fetching income statements:', error);
    return [];
  }
};
