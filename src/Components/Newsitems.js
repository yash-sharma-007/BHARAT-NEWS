import React from "react";

export const Newsitems = (props) =>{
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className={`my-3 bg-${props.clr} text-${props.clr==='dark' ? 'light' : 'dark'}`}  >
            <div  className="card ">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }> 
                    <span className="badge rounded-pill bg-danger"> {source} </span>
                </div>
                <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className={`card-body bg-${props.clr} text-${props.clr==='dark' ? 'light' : 'dark'} `}>
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small style={{color:`${props.clr==='light' ? 'black' : 'white'}` }} className={`text-muted bg-${props.clr}`}>By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm btn-${props.clr==='dark' ? 'light' : 'dark'}`}>Read More</a>
                </div>
            </div>
        </div>
    )
}