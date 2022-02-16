import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import Error from './Error';


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [error, setError] = useState(false)

    const cpfrltr = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://gnews.io/api/v4/top-headlines?country=${props.country}&topic=${props.topic}&token=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        // setArticles(parsedData.articles);
        data.status === 200 ? setArticles(parsedData.articles) : setError(true);
        setTotalResults(parsedData.totalResults);
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    }, [])


    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://gnews.io/api/v4/top-headlines?country=${props.country}&topic=${props.topic}&token=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        data.status === 200 ? setArticles(articles.concat(parsedData.articles)) : setError(true);
        // setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <div className="container">
            <h1 className="text-center my-4" style={{ margin: '90px 35px 0px' }}>Marleen's News App - Top {cpfrltr(props.topic)} Headlines from Germany</h1>
            {loading && <Spinner />}
            {error ?
                <Error />
                :
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url} >
                                    <NewsItem title={element.title} description={element.description} imageUrl={element.image} newsUrl={element.source.url} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            }
        </div>
    )
}

News.defaultProps = {
    country: 'de',
    pageSize: 3,
    topic: 'general'
}

News.defaultProps = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    topic: PropTypes.string
}

export default News
