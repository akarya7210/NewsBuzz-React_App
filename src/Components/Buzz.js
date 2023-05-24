import React, { useEffect, useState } from 'react'
import BuzzList from './BuzzList'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const Buzz = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    const newShow = async () => {
        props.setProgress(20)
        props.setProgress(50)
        props.setProgress(70)
        await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${props.page}&category=${props.category}&pagesize=${props.pagesize}`).then((response) => response.json())
            .then((data) => {
                setArticles(data.articles)
                setTotalResults(data.totalResults)

            });
        props.setProgress(100)
    }
    useEffect(() => {
        document.title = `${capitalFirst(props.category)}-NewsBuzz`
        newShow();
    }, [])

    const fetchMoreData = async () => {
        await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pagesize}`).then((response) => response.json())
            .then((data) => {
                setPage(page + 1);
                setArticles(articles.concat(data.articles))
                setTotalResults(data.totalResults)
            });

    }
    return (
        <>
            <h2 className="mt-2 text-center text-white"><b>NewsBuzz-Top {capitalFirst(props.category)} Headlines</b></h2>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className='row my-4'>
                        {articles.map((element) => {
                            return <div className="col-md-4 object-fit-fill rounded my-2 hover" key={element.url}>
                                <BuzzList title={element.title.slice(0, 50)} description={element.description === null ? element.title.slice(0, 50) : element.description.slice(0, 88)} imageUrl={element.urlToImage === null ? "https://images.macrumors.com/t/476bkzarhHu68EKRmiI-U2cYvLk=/2500x/article-new/2023/05/beats-studio-plus-triple.jpg" : element.urlToImage} newsUrl={element.url}
                                    author={element.author ? element.author : "Jake Kwon"} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )


}



Buzz.defaultProps = {
    country: 'in',
    pagesize: 8,
    category: 'health'
}
Buzz.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.string,
    category: PropTypes.string,
}
export default Buzz
