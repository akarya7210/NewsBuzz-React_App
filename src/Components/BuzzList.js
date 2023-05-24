import React from 'react'

export default function BuzzList(props) {
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div className="card rounded bg-body-secondary border-0">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toUTCString()}</small></p>
                <h3 className="card-title">{title}...</h3>
                <p className="card-text">{description}...</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
    )
}
