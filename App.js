import './App.css';
import Navbar from'./components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar AboutText="Projects Links" />
      {/* <Navbar/>  defoult props */}
      <div className="container mb-3">
        <TextForm title="My Text" />
      </div>
    </>
  );
}

export default App;
