// GENERIC LIST COMPONENT TEMPLATE
import BossCard from "./BossCard.tsx";



interface BossProps {
    id: number
    name: string
    company: string
    department: string
}

interface BossListProps {
    bosses: BossProps[]    // [] means array of items
}

export default function BossList({ bosses }: BossListProps) {
    // EMPTY STATE — show message if no items
    if (bosses.length === 0) {
        return <p>No bosses found.</p>
    }

    // LIST STATE — loop through items and render each one
    return (
        <div>
            {bosses.map((boss) => (
                <BossCard
                    key={boss.id}
                    name={boss.name}
                    company={boss.company}
                    department={boss.department}
                />
            ))}
        </div>
    )
}