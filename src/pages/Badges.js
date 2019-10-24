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
        <Navbar />

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

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
