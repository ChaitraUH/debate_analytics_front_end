import React from 'react';
import './App.css';

import candidates from './candidates';
import ImgButton from './components/iconbutton';
import VideoInp from "./components/videoinput";


function Selection() {
  return (
        <div className="container-fluid main-div">
          <h5 className="font-weight-bold">Select Candidates</h5>
            {candidates.map(data => (
                <ImgButton key={data.id} data={data} />
            ))}
            <VideoInp/>
        </div>
  );
}

export default Selection;
