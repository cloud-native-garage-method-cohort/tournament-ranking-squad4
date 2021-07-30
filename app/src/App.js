import { useState } from 'react';
import './App.css';
import EntryForm from './components/entryForm';
import Ranking from './components/ranking'

export default function App() {
  const [entries, setEntry] = useState([
    { "name": "paul", "score": 5 },
    { "name": "marcos", "score": 8 },
    { "name": "raul", "score": 6 },
  ])

  

  const addEntry = (entry) => {
    setEntry(entries.concat(entry))
  }

  return (
    <div>
      <Ranking entries={entries} />
      <EntryForm addEntry={addEntry} />
    </div>
  )
}
