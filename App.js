import logo from './logo.svg';
import './App.css';
import Nav from './Components/nav/Nav';
import ProfCard from './Components/profcards/ProfCard';

function App() {
  return (
    <div><br/><br/>
    <ProfCard name="RAJINI" pic="https://i.pinimg.com/474x/70/26/e8/7026e849daff8eb9b5b4d6c2fa2ed10a.jpg"/>
    <ProfCard name="KAMAL" pic="https://moviegalleri.net/wp-content/gallery/vikram-hd-images/Vikram-Movie-HD-Images-3fb417c.jpg" />
    </div>
  );
}

export default App;
