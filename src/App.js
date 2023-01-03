import './App.css';
import {Button,TextField} from '@mui/material';
import { useState } from 'react';

function App() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState('');
  const handleSubmit = () => {
    setJobs(prev => [...prev,job]);
    setJob('');
  }
  return (
    <div className="App">
      <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={job}
        onChange={e => setJob(e.target.value)} />
        <Button variant="contained" onClick={handleSubmit}>Add</Button>
      </div>
      <div>
        <ul>
          {jobs.map((job,index) => {
            return <li key={index}>{job}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
