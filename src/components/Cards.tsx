import Card from "./Card"


const Cards: React.FC = () => {
    return (
        <>
            <Card img="https://img.freepik.com/free-photo/still-life-of-relaxing-coffee-cup-on-terrace_23-2149711969.jpg?size=626&ext=jpg">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </Card>

            <Card>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </Card>
        </>
    )
}

export default Cards