import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from './components/Appbar';
import './App.css';
import Header from './components/Header';
import SectionStorycopy from './components/SectionStorycopy';
import SectionMint from './components/SectionMintcopy';
import CloudMint from './components/CloudMint';
function App() {
  return (
    <div>
      <Appbar/>
      <Header/>
      <SectionStorycopy/>
      <SectionMint/>
      <CloudMint/>
    </div>
  );
}

export default App;
