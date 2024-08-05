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
        
        {/* <AppBar position="static" style={{ marginBottom: '15px', background: 'white', border: 'none'}}> */}
          <Tabs value={this.state.selectedTab} onChange={this.handleTabChange} >
            {tabsData1.map((tab, index) => (
              <Tab label={tab.label} key={index} style={{ marginTop: '10px', borderRadius: '20px', background: '#e3dddd', marginRight: "20px" }}/>
            ))}
          </Tabs>
        {/* </AppBar> */}
        <Card style={{ marginBottom: '10px' }}>
          <CardContent>
            <Link to="/detail">
                <img src={tabsData1[this.state.selectedTab].image} alt="Phone" 
                style={{maxWidth: '100%', width: '100%', borderRadius: '20px'}} />
            </Link>
            
            <Typography variant="h5" style={{ marginTop: '10px' }}>
              {tabsData1[this.state.selectedTab].title}
            </Typography>
            <Typography variant="h7" style={{ marginTop: '10px' }}>
              {tabsData1[this.state.selectedTab].content}
            </Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '10px', borderRadius: '10px', background: '#f0f0f5', color: 'black' }}>
              Start Your Campaign
            </Button>
          </CardContent>
        </Card>

        <Card style={{ marginBottom: '10px' }}>
          <CardContent>
            <Link  to="/detail">
                <img src={tabsData2[this.state.selectedTab].image} alt="Phone" 
                style={{maxWidth: '100%', width: '100%', borderRadius: '20px'}} />
            </Link>
            
            <Typography variant="h5" style={{ marginTop: '10px' }}>
              {tabsData2[this.state.selectedTab].title}
            </Typography>
            <Typography variant="h7" style={{ marginTop: '10px' }}>
              {tabsData2[this.state.selectedTab].content}
            </Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '10px', borderRadius: '10px', background: '#f0f0f5', color: 'black' }}>
              Start Your Campaign
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default BitcoinAds;
