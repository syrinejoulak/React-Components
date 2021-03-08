import './index.css';
import Adress from './Component/Profil/Adress';
import FullName from './Component/Profil/FullName';
import ProfilPhoto from "./Component/Profil/ProfilPhoto"

function App() {
  return (
    <div className="App">
<ProfilPhoto />
<FullName />
<br />
<Adress />
    </div>
  );
}

export default App;
