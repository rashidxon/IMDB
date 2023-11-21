import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import Movie from './pages/movieDetail/Movie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<Home/>} />
          {/*   <Route path='/movie' element={<Movie/>} /> */}
          <Route path='/card' element={<MovieList/>} />
          <Route path='/*' element={<h1>Error Pages</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
