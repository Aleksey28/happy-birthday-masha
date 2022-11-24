import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Intro from '../Intro/Intro';
import Disclaimer from '../Disclaimer/Disclaimer';
import Task1 from '../Tasks/Task1/Task';
import Task2 from '../Tasks/Task2/Task';
import Task3 from '../Tasks/Task3/Task';
import Task4 from '../Tasks/Task4/Task';
import Task5 from '../Tasks/Task5/Task';
import Task6 from '../Tasks/Task6/Task';
import HappyEnd from '../HappyEnd/HappyEnd';
import Start from '../Start/Start';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route exact path="/intro" element={<Intro />} />
        <Route exact path="/disclaimer" element={<Disclaimer />} />
        <Route exact path="/find-corgi" element={<Task1 />} />
        <Route exact path="/lips-reading" element={<Task2 />} />
        <Route exact path="/riddle" element={<Task3 />} />
        <Route exact path="/vise-versa-song" element={<Task4 />} />
        <Route exact path="/catch-balls" element={<Task5 />} />
        <Route exact path="/enigma" element={<Task6 />} />
        <Route exact path="/happy-end" element={<HappyEnd />} />
      </Routes>
    </div>
  );
}

export default App;
