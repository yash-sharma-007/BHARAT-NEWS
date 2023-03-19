import React, { useEffect, useState} from 'react'
import { Newsitems } from './Newsitems';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import '../App.css'

export const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 
    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - BharatNews`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}  className={`bg-${props.clr} text-${props.clr==='dark' ? 'light' : 'dark'}`} >
                <h1 className="text-center w-50 newstitle" style={{ padding:"30px",margin:"10px 0",border:"2px solid black",borderRadius:'100px',display:'flex',alignItems:'center',justifyContent:'center' }}>BharatNews - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading &&  <div className="text-center"> <img className="my-3" std="./loading.gif" alt="loading" /> </div>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={   <div className="text-center"> <img className="my-3" src="./loading.gif" alt="loading" /></div> }
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 BOX" style={{height:"550px",overflow:'scroll'}} key={element.url}>
                                <Newsitems clr={props.clr} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </div>
        )
    
}


News.defaultProps = {
    country: 'in',
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

