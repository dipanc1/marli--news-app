import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">

                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="translate-middle badge rounded-pill bg-danger" >{source}</span>
                </div>

                <img src={!imageUrl ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text"><small className="text-muted">On {new Date(date).toGMTString()}</small></p>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More...</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
