import { HashRouter } from 'react-router-dom';
import './App.css';
import Wrapper from './components/Wrapper';
import Routers from './Routers';
import Footer from './components/Footer/Footer';
function App() {
    return (
        <HashRouter>
            <Wrapper></Wrapper>
            <Routers />
            <Footer />
        </HashRouter>
    );
}

export default App;
