import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list } = this.props;
    let displayItems = list.map((item, i) => {
      return (
        <div key={ i }>
          <h3>{ item.name }</h3>
          <p>{ item.price }</p>
          <p>{ item.image }</p>
        </div>
      );
    });

    return (
      <div>
        { displayItems }
      </div>
    );
  }
}

export default Dashboard;