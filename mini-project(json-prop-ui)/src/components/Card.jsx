import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
    <div className="card">
        <div className="top">
            <div className="img">
            <img src={props.brandLogo} alt="" />
            </div>
            <div className="save">
                <p>Saved<Bookmark size={15} strokeWidth={2} id="ic" /></p>
            </div>
        </div>
        <div className="mid">
            <div className="company">
            <div id="cname">{props.companyName}</div>
            <div id="opak">{props.datePosted}</div>
            </div>
            <h2>{props.post}</h2>
            <div className="flexible">
                <div className="div1">{props.tag1}</div>
                <div className="div2">{props.tag2}</div>
            </div>
        </div>
        <div className="bottom">
            <div className="price">
                <h3>{props.pay}</h3>
                <p>{props.location}</p>
            </div>
            <button>Apply now</button>
        </div>
    </div>

  )
}

export default Card