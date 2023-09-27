import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import Row from './Components/Row';
import requests from './requests';

function App() {
  return(
    <div style={{backgroundColor:"black",color:'white'}}>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPoster={true} title="Netflix Originals"  fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending"  fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>
      <Row title="Horror Movies"  fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance Movies"  fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Decumentries"  fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default App;
