import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import NewPrediction from './NewPrediction';
import HeadToHead from './HeadToHead'
import HeadToHead2 from './HeadToHeadv2'
import DocumentMeta from "react-document-meta";
import Helmet from "react-helmet";

import './App.css'

const meta = {
  property: 'og:image', 
  content: 'https://www.apple.com/v/iphone/home/t/images/home/og.png?201610171354',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags'
    }
  }
};

<script type="application/ld+json">{`
{
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  "address": {
  "@type": "PostalAddress",
  "addressLocality": "Imbrium",
  "addressRegion": "OH",
  "postalCode":"11340",
  "streetAddress": "987 Happy Avenue"
  },
  "description": "Cars4All has a car for everybody! Our prices are the lowest, and the quality the best-est; we are all about having the cake and eating it, too!",
  "name": "Cars4All",
  "telephone": "555",
  "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
  "geo": {
  "@type": "GeoCoordinates",
  "latitude": "40.75",
  "longitude": "73.98"
  }, 			
  "sameAs" : ["http://www.facebook.com/your-profile",
  "http://www.twitter.com/your-profile",
  "http://plus.google.com/your-profile"]
}
`}</script>


export default function App() {

  // &nbsp;
  return (
    
    <div id="background">

<Helmet>
            {/* <title>Nested Title</title> */}
            <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Nested component" />
            <meta property="og:title" content="iPhone" />
            <meta property="og:description" content="description" />
            <meta property="og:image" content="https://www.apple.com/v/iphone/home/t/images/home/og.png?201610171354" />
        </Helmet>

      <HeadToHead2 />
      {/* <NewPrediction /> */}
    <div id="footer">
    <div className="row">
  <div className="column">
    <center>
    <img style={{width: 40, marginTop: 9}} src="https://i.ibb.co/VC8jYwf/Screenshot-2022-02-27-at-1-59-11-PM.png"></img>
    </center>
    
  </div>
  <div className="column">
  <center>
    <img style={{width: 30, marginTop: 11, borderRadius: 5}} src="https://i.ibb.co/QPG9xr1/Screenshot-2022-02-27-at-1-54-38-PM.png"></img>
    </center>
  </div>
  <div className="column">
    
  <center>
    <img style={{width: 30, marginTop: 9}} src="https://i.ibb.co/hWPS33p/Screenshot-2022-02-27-at-2-03-15-PM.png"></img>
    </center>
  </div>
</div>
       
    </div>
    </div>
    
 
  );
}



