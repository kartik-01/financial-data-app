import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';

import NavBar from './components/NavBar';
import MainContent from './pages/MainContent';
import Footer from './components/Footer';
import { useFinancialData } from './hooks/useFinancialData';
import { useNavigation } from './hooks/useNavigation';

const App = () => {
  const financialData = useFinancialData();
  const navigation = useNavigation();

  return (
    <div className="min-h-screen bg-white">
      <NavBar 
        isOpen={navigation.isOpen} 
        setIsOpen={navigation.setIsOpen}
        visible={navigation.visible}
      />
      
      <MainContent 
        {...financialData}
        isOpen={navigation.isOpen}
      />
      
      <Footer />
    </div>
  );
};

export default App;
