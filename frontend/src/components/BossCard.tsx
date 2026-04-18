import RatingComponent from './RatingComponent'

interface BossCardProps {
    name: string
    company: string
    department: string
}

function BossCard({name, company, department}: BossCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                    <p className="text-gray-600 mt-1">{company}</p>
                    <p className="text-sm text-gray-400 mt-1">{department}</p>
                    <RatingComponent onRate={(rating) => console.log(rating)} />
                </div>
                <div className="bg-blue-500 text-white text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center">
                    {name.charAt(0)}
                </div>
            </div>
        </div>
    )
}

export default BossCard