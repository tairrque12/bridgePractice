//DEFINE YOUR COMPONENT PROPS, WHAT DOES IT NEED TO RECEIVE
interface BossCardProps {
    name: string
    company: string
    department: string
}

//BUILD YOUR COMPONENT - RECEIVE PROPS, DISPLAY THEM
function BossCard({name, company, department}: BossCardProps) {
    return (
        <div>
            <p>{name}</p>
            <p>{company}</p>
            <p>{department}</p>
        </div>

    );
}
export default BossCard;