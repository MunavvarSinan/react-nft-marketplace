import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import PunkList from './components/PunkList';
import axios from 'axios';
import Main from './components/MainComp';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [state, setState] = useState(0);

  console.log(state);
  useEffect(() => {
    const getMyNft = async () => {
      const response = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xe6C86e3BcC6AD0053761F0eF8aEC26c9EF9593DF&order_direction=asc'
      );
      console.log(response.data.assets);
      setPunkListData(response.data.assets);
    };
    return getMyNft();
  }, []);
  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main  punkListData={punkListData} state={state}/>
          <PunkList punkListData={punkListData} setState={setState} />{' '}
        </>
      )}
    </div>
  );
}

export default App;
