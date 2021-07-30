import { Button, Card, TextField } from '@material-ui/core'
import { useState } from 'react'

export default function EntryForm({ addEntry }) {
    const [name, setName] = useState('')
    const [score, setScore] = useState('')

    return (
        <Card>
            <TextField id='name' label='Name' variant='outlined' onChange={(e) => setName(e.target.value)} />
            <TextField id='score' label='Score' variant='outlined' onChange={(e) => setScore(e.target.value)} />
            <Button variant='contained' color='primary' onClick={() => addEntry({ name: name, score: score })}>
                Add
            </Button>
        </Card>
    )
}

