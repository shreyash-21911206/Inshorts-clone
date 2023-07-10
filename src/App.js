import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
// const inshorts = require('inshorts-api');
import Nav from './components/Nav';
import Card from './components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState("all_news");
  const [loading, setLoading] = useState(false);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const fetchData = () => {
    fetch(`https://inshortsv2.vercel.app/news?type=${category}`)
    .then(res => res.json())
    .then(res => {
      setData(res.articles);
      setLoading(true); 
      setNewsResults(res.articles.length)
    })
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [newsResults, loadMore, category]);

  return (
    <>{
    loading ?
      <div className="App">
        <Nav setCategory={setCategory}/>
        <Card newsArray={data}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
          category={category}
          />
          <Footer/>
      </div> : 
          <div style={{display: "flex", justifyContent:"center", top: "50%"}}>
            <FontAwesomeIcon icon={faSpinner} style={{fontSize: "70px"}} spin/>
          </div>
  }</>
  )
}

export default App;
