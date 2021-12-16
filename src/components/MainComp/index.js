import React, { useState, useEffect } from 'react';
import './styles/main.css';
import InstagramLogo from '../../assets/owner/instagram.png';
import TwitterLogo from '../../assets/owner/twitter.png';
import MoreIcon from '../../assets/owner/more.png';

const Index = ({ state, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  useEffect(() => {
    setActivePunk(punkListData[state]);
  }, [punkListData, state]);
  console.log(punkListData);
  return (
    <div className='main'>
      <div className='mainContent'>
        <div className='punkHighlight'>
          <div className='punkContainer'>
            <img
              className='selectedPunk'
              src={activePunk.image_original_url}
              alt=''
            />
          </div>
        </div>
        <div className='punkDetails' style={{ color: 'white' }}>
          <div className='title'>
            {activePunk.name  }
            <span className='itemNumber'>   #{activePunk.token_id}</span>
          </div>
          <div className='owner'>
            <div className='ownerImageContainer'>
              <img src={activePunk.owner.profile_img_url} alt='' />
            </div>
            <div className='ownerDetails'>
              <div className='ownerNameAndHandle'>
                <div className='ownerAddress'>{activePunk.owner.address}</div>
                <div className='ownerHandle'>@munavvar</div>
              </div>
              <div className='ownerLink'>
                <img src={InstagramLogo} alt='' />
              </div>
              <div className='ownerLink'>
                <img src={TwitterLogo} alt='' />
              </div>
              <div className='ownerLink'>
                <img src={MoreIcon} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
