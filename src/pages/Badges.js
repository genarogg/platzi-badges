import React from 'react';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {
  state = {
    
  };

  render() {
    return (
      <div>
        

        <div className="Badges__container">
          <div className="Badges__buttons">
            <a href="/badges/new" className="btn btn-primary">
              New Badge
            </a>
          </div>

          <BadgesList badges={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Badges;
