import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

const Popup = () => {
  function test(){
    // chrome.tabs.query({active: true}, function(tabs){
    //   alert(tabs[0].url);
    // });
    alert(
      'Sending Email for Job: ES-124511'
    )
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img class='logo'src="https://cdn.esurv.co.uk/wp-content/uploads/2017/05/logo-esurv-white-208x80.png"/>
        <h3 class='title'>Chrome Tool</h3>
        <Grid display="flex" justifyContent="space-between">
          <Button sx={{mr:2, minWidth:7}} variant='contained' onClick={test}>To B2C</Button>
          <Button sx={{ml:2, minWidth:7}}variant='contained' onClick={test}>To Agent</Button>
        </Grid>
      </header>
    </div>
  );
};

export default Popup;
