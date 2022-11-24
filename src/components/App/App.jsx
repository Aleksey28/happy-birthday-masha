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
        <Route exact path="/task-1" element={<Task1 />} />
        <Route exact path="/task-2" element={<Task2 />} />
        <Route exact path="/task-3" element={<Task3 />} />
        <Route exact path="/task-4" element={<Task4 />} />
        <Route exact path="/task-5" element={<Task5 />} />
        <Route exact path="/task-6" element={<Task6 />} />
        <Route exact path="/happy-end" element={<HappyEnd />} />
      </Routes>
    </div>
  );
}

export default App;
