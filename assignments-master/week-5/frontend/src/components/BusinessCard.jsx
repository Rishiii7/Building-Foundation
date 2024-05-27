export function BusinessCard(props) {

    return (
        <>
        <div>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{props.name}</h3>
                    <p className="card-text">{props.description}</p>
                    <h5 className="interest-title">Interest</h5>
                    <ul className="interest">
                        {props.interests.map( (interest) => {
                            return <li key={interest}>{interest}</li>
                        })}
                    </ul>
                    <div className="social-links">
                        <a href={props.linkedin} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i> LinkedIn </a>
                        <a href={props.twitter} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> Twitter </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}