import { Card } from '@material-ui/core'

export default function Ranking({ entries }) {
    console.log('Ranking', entries)
    console.log()
    return (
        entries.length !== 0 ?
            <Card>
                {
                    entries.map((entry) => {
                        return (
                            <div>
                                <h2>{entry.name}</h2>
                                <h2>{entry.score}</h2>
                            </div>
                        )
                    })
                }
            </Card> :
            <h2>No Entries yet!</h2>
    )
}