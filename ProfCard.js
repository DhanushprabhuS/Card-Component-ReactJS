import React from 'react';
import { useEffect,useState } from 'react';
import './profCard.css';
import './Profile.scss';


const ProfCard = ({name,pic}) => {
    const [data,setData] = useState('');
    
    return (
      <div class="profile">
          <div className='coldiv'>
            <div class="image">
              <div class="circle-1"></div>
              <div class="circle-2"></div>
              <img src={pic} width="700" height="700" alt="profile"/>
            </div>
            <div class="name">{name}</div>
           
          </div>
          <div className='coldiv'>
            <div class="actions">
              <button class="btn">View Profile</button>
            </div>
          </div>
          
      </div>
    );
}

export default ProfCard;
