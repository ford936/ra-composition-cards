import "./Card.css"

interface CardProps {
    img?: string
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ img, children }) => {
    return (
        <div className="cards" style={{ width: "18rem" }}>
            {img ? <img src={img} className="card-img-top" alt="img" /> : ""}
            {children}
        </div>
    )
}

export default Card