import { useState } from 'react'
import BossList from './components/BossList'
import AddBossForm from './components/AddBossForm'

const initialBosses = [
    { id: 1, name: 'Michael Scott', company: 'Dunder Mifflin', department: 'Management' },
    { id: 2, name: 'Miranda Priestly', company: 'Runway Magazine', department: 'Fashion' },
]

function App() {
    const [bosses, setBosses] = useState(initialBosses)

    const handleAddBoss = (data: { name: string; company: string; department: string }) => {
        const newBoss = { id: bosses.length + 1, ...data }
        setBosses([...bosses, newBoss])
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-2xl mx-auto py-10 px-4">

                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Rate My Boss 🎯
                </h1>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Add a Boss</h2>
                    <AddBossForm onSubmit={handleAddBoss} />
                </div>

                <BossList bosses={bosses} />

            </div>
        </div>
    )
}

export default App