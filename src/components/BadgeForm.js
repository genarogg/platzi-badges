import React from 'react';

class BadgeForm extends React.Component {
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };

  handleClick = e => {
    console.log('Button was clicked');
  };

   = e => {
    e.preventDefault();
    console.log('Form was submitted');
  };

  render() {
    return (
      
    );
  }
}

export default BadgeForm;