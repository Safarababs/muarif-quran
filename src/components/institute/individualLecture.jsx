function Lecture(props) {
    return (
        <div className="box-container">
            <div className="box">
                <div className="image">
                    <iframe className="video" src={props.link} width="300" height="200" title="YouTube video player" allowFullScreen></iframe>
                </div>
                <div className="content">
                    <h3>{props.title}</h3>
                    <p>{props.details}</p>
                </div>
            </div>
        </div>
    )
};

export default Lecture;