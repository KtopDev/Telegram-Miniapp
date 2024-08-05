import React, { Component } from 'react';
import { AppBar, Tab, Tabs, Card, CardContent, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const tabsData1 = [
  { label: 'Early', title: "Trade: Earn 300M $DOOR !", content: 'Discover Tradoor: Earn big $DOOR rewards for trades, referrals, liquidity and feeding the bull !' , image: "https://fan-ton.com/wp-content/uploads/2024/05/COVER-1024x576.jpg"},
];

const tabsData2 = [
    { label: 'Early', title: "Trade: Earn 300M $DOOR !", content: 'Discover Tradoor: Earn big $DOOR rewards for trades, referrals, liquidity and feeding the bull !' , image: "https://fan-ton.com/wp-content/uploads/2024/05/COVER-1024x576.jpg"},
    { label: 'Featured', title: "Launch with Notcoin", content: 'Submit project for Notcoin Explore.', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQePG8HgyJ7Ii7d8CFdHcJsdryUVjx31NlQ&s"},
    { label: 'Watched', title: "Launch with Notcoin", content: 'Submit project for Notcoin Explore.', image: "https://nairametrics.com/wp-content/uploads/2024/05/notcoin-1.jpg" },
  ];

class BitcoinAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
  }

  handleTabChange = (event, newValue) => {
    this.setState({ selectedTab: newValue });
  };

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card style={{width: '40%', textAlign: "center",  marginBottom: '10px', marginTop: '10px' }}>
            <Typography variant="h5" style={{ marginTop: '10px' }}>
              Campaigns
            </Typography>
        </Card>
        
        <Card style={{ marginBottom: '10px' }}>
          <CardContent>
            <Link to="/detail">
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQePG8HgyJ7Ii7d8CFdHcJsdryUVjx31NlQ&s"} alt="Phone" 
                style={{maxWidth: '100%', width: '100%', borderRadius: '20px'}} />
            </Link>
            
            <Typography variant="h5" style={{ marginTop: '10px' }}>
              Start your campaign
            </Typography>
            <Typography variant="h7" style={{ marginTop: '10px' }}>
              Rewards with notcoin, try for now ....
            </Typography>
           
          </CardContent>
        </Card>
        
      </div>
    );
  } 
}
 
export default BitcoinAds;
