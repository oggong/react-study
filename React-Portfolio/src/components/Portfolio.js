import React, { Component } from "react";

export default class Porfolio extends Component {

  linkTOgit = (e) =>{
  //   console.log(e.target)
  //  console.log(e.target.getAttribute("url"))
   window.location.href=e.target.getAttribute("url")
  
  }

  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item,i) => {
                  return (
                    <div className="columns portfolio-item" key={i}>
                      <div className="item-wrap" >
                        
                          {/* #modal-01 */}
                          <img src={`${item.imgurl}`} className="item-img"   />
                          {/* <a href={item.portfoliourl}> */}
                          <div className="overlay" onClick={this.linkTOgit} url={item.portfoliourl}>
                            <div className="portfolio-item-meta" url={item.portfoliourl} >
                           
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        {/* </a> */}
                      </div>
                      <button>
                        <a href={item.portfoliourl}>link - {item.name}</a>
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
