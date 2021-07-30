import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import EntryForm from './components/entryForm'
import Ranking from './components/ranking'

export default function App() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    requestEntries()
  }, [])

  const requestEntries = () => {
    axios.get('http://localhost:3000/ranking'
    ).then(response => {
      setEntries(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  const addEntry = ({ name, score }) => {
    console.log('addEntry', name, score)
    axios.get(`http://localhost:3000/inscore?name=${name}&score=${score}`,
    ).then(response => {
      setEntries(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <Ranking entries={entries} />
      <EntryForm addEntry={addEntry} />
    </div>
  )
}
