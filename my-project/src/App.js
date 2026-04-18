import './App.css';
import Header from './Component/header';
import Main from './Component/main'
import Footer from './Component/footer';
import Nav from './Component/nav';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav></Nav>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
