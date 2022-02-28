import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component { 
  
      articles =  [
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": null,
        "title": "Govt to provide bulk of Rs 15,000 crore capital support to weak PSU banks - Moneycontrol",
        "description": "Earlier this month, Punjab & Sind Bank got board approval to raise equity capital worth Rs 4,600 crore by issuing preference shares to the government.",
        "url": "https://www.moneycontrol.com/news/business/govt-to-provide-bulk-of-rs-15000-crore-capital-support-to-weak-psu-banks-8171851.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2020/09/PUNJAB-SIND-BANK-770x433.jpg",
        "publishedAt": "2022-02-27T15:37:16Z",
        "content": "Weak public sector lenders like Central Bank of India and Punjab &amp; Sind Bank will get the lion's share of the Rs 15,000 crore earmarked for capital infusion in state-owned banks for the current f… [+2704 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "U.Today"
        },
        "author": null,
        "title": "Cardano Attracts $50 Million to DeFi Projects in Last 30 Days, TVL Reaches $117 Million - U.Today",
        "description": "Millions are attracted by the Cardano network with the appearance of DeFi products",
        "url": "https://u.today/cardano-attracts-50-million-to-defi-projects-in-last-30-days-tvl-reaches-117-million",
        "urlToImage": "https://u.today/sites/default/files/styles/1200x900/public/2022-02/12969.jpg",
        "publishedAt": "2022-02-27T15:35:55Z",
        "content": "Disclaimer: The opinion expressed here is not investment advice it is provided for informational purposes only. It does not necessarily reflect the opinion of U.Today. Every investment and all tradin… [+1605 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": null,
        "title": "Shiba Inu: A 'millionaire's' bet against long-term uncertainty? - AMBCrypto News",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMiUWh0dHBzOi8vYW1iY3J5cHRvLmNvbS9zaGliYS1pbnUtYS1taWxsaW9uYWlyZXMtYmV0LWFnYWluc3QtbG9uZy10ZXJtLXVuY2VydGFpbnR5L9IBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2022-02-27T14:30:48Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "PTI",
        "title": "Ashneer Grover loses arbitration against governance review at BharatPe - The Indian Express",
        "description": "Ashneer  Grover, who last month went on a two-month leave of absence following allegations of using abusive language against Kotak Mahindra Bank staff and fraudulent practices, had filed an arbitration plea with the Singapore International Arbitration Centre …",
        "url": "https://indianexpress.com/article/business/ashneer-grover-loses-arbitration-against-governance-review-at-bharatpe-7793368/",
        "urlToImage": "https://images.indianexpress.com/2022/02/ashneer-grover-shark-tank-india-1.jpg",
        "publishedAt": "2022-02-27T13:58:06Z",
        "content": "BharatPe co-founder and managing director Ashneer Grover has lost an arbitration that he had filed against the company’s investigation against him, with an emergency arbitrator holding that there was… [+3823 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Investing.com"
        },
        "author": "Investing.com",
        "title": "Top 5 Things to Watch in Markets in the Week Ahead By Investing.com - Investing.com",
        "description": "Top 5 Things to Watch in Markets in the Week Ahead",
        "url": "https://www.investing.com/news/economy/top-5-things-to-watch-in-markets-in-the-week-ahead-2773261",
        "urlToImage": "https://i-invdn-com.investing.com/news/moved_LYNXMPEI1Q03H_L.jpg",
        "publishedAt": "2022-02-27T12:39:00Z",
        "content": "By Noreen Burke\r\nInvesting.com -- A decision on Saturday by Western nations to block some Russian banks from the SWIFT international payments network as punishment for the invasion of Ukraine looks s… [+5079 chars]"
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": null,
        "title": "Honda Activa electric scooter might be launched soon in India - Kalinga TV",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMid2h0dHBzOi8va2FsaW5nYXR2LmNvbS9idXNpbmVzcy9hdXRvbW9iaWxlL2hvbmRhLWFjdGl2YS1lbGVjdHJpYy1zY29vdGVyLW1pZ2h0LWJlLXRoZS1uZXh0LWJpZy10aGluZy1pbi1pbmRpYW4tZXYtc3BhY2Uv0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2022-02-27T11:55:10Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": null,
        "title": "Stay away from LIC IPO, the firm may not command premium valuations on listing: Vaibhav Agrawal of Teji... - Moneycontrol.com",
        "description": "Although subscription from retail investors would be good considering a large number of policyholders have opened Demat accounts to subscribe to the company’s IPO, participation from individual investors is expected to be lacklustre.",
        "url": "https://www.moneycontrol.com/news/business/ipo/stay-away-from-lic-ipo-the-firm-may-not-command-premium-valuations-on-listing-vaibhav-agrawal-of-teji-mandi-8167041.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/02/LIC-IPO-1-770x433.jpg",
        "publishedAt": "2022-02-27T11:09:34Z",
        "content": "The much-talked-about LIC IPO, for which the government was preparing for a couple of years, is finally around the corner. It seems no less than a festival for the stock market participants. The larg… [+4631 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CryptoGlobe"
        },
        "author": "Michael Lavere",
        "title": "Former ‘Hacker of the Year’ Says ‘I Was Wrong, We Need Crypto’ - CryptoGlobe",
        "description": "32-year old Danish programmer David Heinemeier Hansson, who was in 2005 recognized by Google and O’Reilly with the Hacker of the Year award for his creation of Ruby on Rails web development framework, now admits that he was wrong about crypto. On February 21,…",
        "url": "https://www.cryptoglobe.com/latest/2022/02/former-hacker-of-the-year-says-i-was-wrong-we-need-crypto/",
        "urlToImage": "https://cryptoglobe.s3.eu-west-2.amazonaws.com/2022/02/bitcoin-g955be7599_1920-768x511.jpg",
        "publishedAt": "2022-02-27T11:03:58Z",
        "content": "32-year old Danish programmer David Heinemeier Hansson, who was in 2005 recognized by Google and OReilly with the Hacker of the Year award for his creation of Ruby on Rails web development framework,… [+2758 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CarToq.com"
        },
        "author": "CarToq Desk",
        "title": "MG MG 4 electric hatchback car teaser out: India launch a possibility - CarToq.com",
        "description": "Taking note of the affordable electric vehicle segment’s growth in the United Kingdom, the British Motoring brand Morris Garages recently released a teaser for its upcoming mass-market EV. The company in a recent tweet shared a snippet of the vehicle getting …",
        "url": "https://www.cartoq.com/mg-mg-4-electric-hatchback-car-teaser-out-india-launch-a-possibility/",
        "urlToImage": "https://www.cartoq.com/wp-content/uploads/2022/02/mg-4-hatchback-india-fb.jpg",
        "publishedAt": "2022-02-27T10:56:00Z",
        "content": "Taking note of the affordable electric vehicle segments growth in the United Kingdom, the British Motoring brand Morris Garages recently released a teaser for its upcoming mass-market EV. The company… [+3269 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ZyCrypto"
        },
        "author": null,
        "title": "‘Buying The Dip’ — Bitcoin Whales Transactions Peak At Highest Level In A Month - ZyCrypto",
        "description": "Bitcoin whales continue to rely on the “buy the dip” strategy to increase their long-term positions. After the BTC price plunged to $34,700",
        "url": "https://zycrypto.com/buying-the-dip-bitcoin-whales-transactions-peak-at-highest-level-in-a-month/",
        "urlToImage": "https://zycrypto.com/wp-content/uploads/2021/07/A-Mammoth-Bitcoin-Whale-Has-Passed-Away-And-Everyones-Left-With-One-Troubling-Question.jpg",
        "publishedAt": "2022-02-27T10:28:42Z",
        "content": "Bitcoin whales continue to rely on the buy the dip strategy to increase their long-term positions. After the BTC price plunged to $34,700 following Russias invasion of Ukraine, whales made massive pu… [+2236 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BloombergQuint"
        },
        "author": "Janani Janarthanan",
        "title": "Warren Buffett Says Yet To Find Companies To Deploy Massive Cash Pile - BloombergQuint",
        "description": "Warren Buffett's annual letter to shareholders: Here are the key highlights.",
        "url": "https://www.bloombergquint.com/markets/warren-buffett-says-yet-to-find-companies-to-deploy-massive-cash-pile",
        "urlToImage": "https://gumlet.assettype.com/bloombergquint%2F2020-08%2F0ec5fc40-fea0-49ca-b92c-f7cc6e05e330%2F337231987.jpg?rect=0%2C0%2C4000%2C2100&w=1200&auto=format%2Ccompress&ogImage=true",
        "publishedAt": "2022-02-27T10:24:45Z",
        "content": "Buffett, underscoring Berkshire's investment record, cited the example of a $8.6-million purchase of National Indemnity, the Omaha-based insurer in 1967. That has now catapulted to become part of the… [+918 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "GaadiWaadi.com"
        },
        "author": "Kshitij Rawat",
        "title": "Bajaj Pulsar F250 Gets A New Blue Colour Shade – Walkaround Video - GaadiWaadi.com",
        "description": "Bajaj Pulsar F250 will get a blue paint option soon, and this new colour has already started arriving at dealerships across the country",
        "url": "https://gaadiwaadi.com/bajaj-pulsar-f250-gets-a-new-blue-colour-shade-walkaround-video/",
        "urlToImage": "https://gaadiwaadi.com/wp-content/uploads/2022/02/Bajaj-Pulsar-F250-blue-colour-option.jpg",
        "publishedAt": "2022-02-27T10:00:13Z",
        "content": "Bajaj Pulsar 250 twins – F250 and N250 – were launched in India in October last year, as the largest-capacity models in the Pulsar range. Both the bikes were introduced with just two colour options, … [+1849 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Russia-Ukraine war, GDP estimates, PMI data, auto sales numbers to dominate equity markets this week - Mint",
        "description": "Russia's invasion of Ukraine will dominate the markets, especial energy prices with Putin's Russian forces specifically targetting airfields and fuel facilities",
        "url": "https://www.livemint.com/market/russiaukraine-war-gdp-estimates-pmi-data-auto-no-to-dominate-equity-markets-11645953240092.html",
        "urlToImage": "https://images.livemint.com/img/2022/02/27/600x338/KVP8IM6W_1600274980295_1600274984745_1645954821356.jpg",
        "publishedAt": "2022-02-27T09:41:50Z",
        "content": "Russia's attack on Ukraine and India's macroeconomic signals will dominate the Indian stock market this week, suggest analysts. While Russia's war in Ukraine has reached Kyiv, the release of GDP esti… [+3212 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Cardekho.com"
        },
        "author": "Sonny",
        "title": "2022 Maruti Baleno Accessories Detailed In Pics - CarDekho",
        "description": "The updated hatchback gets an array of personalisation options from the carmaker  The Maruti Baleno premium hatchback has just received its most significant update since launch. The exterior design has been refreshed, especially the front end. The new Baleno …",
        "url": "https://www.cardekho.com/india-car-news/2022-maruti-baleno-accessories-detailed-in-pics-28683.htm",
        "urlToImage": "https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/28682/1645947703699/AccessoriesStory.jpg",
        "publishedAt": "2022-02-27T07:11:00Z",
        "content": "The Maruti Baleno premium hatchback has just received its most significant update since launch. The exterior design has been refreshed, especially the front end. The new Baleno gets a host of officia… [+1724 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Deccan Herald"
        },
        "author": "Bloomberg Opinion",
        "title": "The business secrets held in India’s nutella jars - Deccan Herald",
        "description": "By Andy Mukherjee A case of Dove bars, a couple of dozen Lay’s packets, six jars of Nutella. To the owner of a tiny mom-and-pop store, these may just be the humdrum weekly sales figures for soap, chips and bread spread. But to Solv, a business-to-business mar…",
        "url": "https://www.deccanherald.com/business/business-news/the-business-secrets-held-in-india-s-nutella-jars-1085588.html",
        "urlToImage": "https://www.deccanherald.com/sites/dh/files/articleimages/2022/02/27/2022-02-26t085331z376029375rc2krs9u1pwlrtrmadp3amazon-com-india-future-reliancejpg-1085588-1645956988.jpg",
        "publishedAt": "2022-02-27T07:01:19Z",
        "content": "By Andy Mukherjee\r\nA case of Dove bars, a couple of dozen Lays packets, six jars of Nutella. To the owner of a tiny mom-and-pop store, these may just be the humdrum weekly sales figures for soap, chi… [+6561 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Future Retail Suspends Supermarket Operations As Reliance Plans Takeover - NDTV Profit",
        "description": "Reliance Industries Limited will rebrand the Future stores after the company failed to make payments for them to Reliance",
        "url": "https://www.ndtv.com/business/future-retail-suspends-supermarket-operations-as-reliance-plans-takeover-2792389",
        "urlToImage": "https://c.ndtvimg.com/2022-01/r0v4brc8_big-bazaar-reuters_625x300_03_January_22.jpg",
        "publishedAt": "2022-02-27T06:37:47Z",
        "content": "Future Retail has suspended its supermarket operations as Reliance plans takeover\r\nFuture Retail Limited, India's second-largest retailer, suspended most of its online and offline operations as store… [+2015 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "PTI",
        "title": "Reliance Retail: King of India Retail - Economic Times",
        "description": "Bernstein in a report said Reliance Retail is India's largest organised retailer both in terms of revenue and store network. It has 14,412 stores in India spread over 40 million square feet.",
        "url": "https://economictimes.indiatimes.com/industry/services/retail/reliance-retail-king-of-india-retail/articleshow/89865322.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-89865405,width-1070,height-580,imgsize-46508,overlay-economictimes/photo.jpg",
        "publishedAt": "2022-02-27T05:59:00Z",
        "content": "Reliance Retail - which grew its retail footprint by 39 per cent (in square feet) since the pandemic, added multiple brands and expanded its digital commerce - will further swell its network with the… [+3590 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Auto Desk",
        "title": "Hero MotoCorp to launch its first EV in March, plans a range of premium products - Hindustan Times Auto News",
        "description": "Hero MotoCorp's electric scooter will compete with TVS iQube, Bajaj Chetak, Ola S1.",
        "url": "https://auto.hindustantimes.com/auto/electric-vehicles/hero-motocorp-to-launch-its-first-ev-in-march-plans-a-range-of-premium-products-41645939209570.html",
        "urlToImage": "https://images.hindustantimes.com/auto/img/2022/02/27/600x338/Hero_MotoCorp_e-scooter_1645939462977_1645939468503.webp",
        "publishedAt": "2022-02-27T05:26:21Z",
        "content": "Hero MotoCorp is ready to roll out its first-ever electric two-wheeler in March 2022, said Niranjan Gupta, CFO of the company. The two-wheeler giant also plans to launch a wide range of premium produ… [+2030 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Cointelegraph"
        },
        "author": "Jonathan MacDonald",
        "title": "Why decentralization isn’t the ultimate goal of Web3 - Cointelegraph",
        "description": "For Web3 to be given control to the people, and provide access without locking anyone out — it needs to be decentralized without a centralized point of control.",
        "url": "https://cointelegraph.com/news/why-decentralization-isn-t-the-ultimate-goal-of-web3",
        "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDIvYTI5ZTNiYmItMjFkZC00ZTM3LWJiYjMtYmNjZDJlNWZjN2YzLmpwZw==.jpg",
        "publishedAt": "2022-02-27T05:18:20Z",
        "content": "The transition from Web2 to Web3 is inevitable. Yet, as the demand for decentralization gains momentum, several important questions are being raised about the current state of blockchain technology a… [+6706 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CarToq.com"
        },
        "author": "Paarth Khatri",
        "title": "10 Toyota cars lined up for launch in India over the next 2 years: Hilux to RAV4 - CarToq.com",
        "description": "Toyota recently announced that they have sold a total of 1 lakh units of Urban Cruiser and Glanza. So, they are quite successful and Toyota will also be launching more vehicles in the Indian market to expand its portfolio. Here, are 10 vehicles that will be l…",
        "url": "https://www.cartoq.com/10-toyota-cars-lined-up-for-launch-in-india-over-the-next-2-years-hilux-to/",
        "urlToImage": "https://www.cartoq.com/wp-content/uploads/2022/01/upcoming-toyota-cars-for-india.jpg",
        "publishedAt": "2022-02-27T05:16:02Z",
        "content": "Toyota recently announced that they have sold a total of 1 lakh units of Urban Cruiser and Glanza. So, they are quite successful and Toyota will also be launching more vehicles in the Indian market t… [+3559 chars]"
    }
]

  // Creating class constructor
  constructor(){
    // Calling the parent class constructor
    super()
    // console.log("Im the news.js constructor")

    // Defining the states and you can update state using this.setState 
    this.state ={
      articles :this.articles,
      loading:false
    }
}
  render() {
    return (
      <div className="container my-4  px-4 py-4">
        <h2>Welcome To The MyNewsApp - Grab the latest news here :</h2>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <NewsItem url="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/976a59b09e0e681e692bd7517498e3f2.jpg" />
          </div>
          <div className="col-md-6 col-lg-4">
            <NewsItem url="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/976a59b09e0e681e692bd7517498e3f2.jpg" />
          </div>
          <div className="col-md-6 col-lg-4">
            <NewsItem url="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/976a59b09e0e681e692bd7517498e3f2.jpg" />
          </div>
        </div>
      </div>
    )
  }
}

export default News
