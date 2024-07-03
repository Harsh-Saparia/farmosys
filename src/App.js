import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Wrapper from './components/Wrapper';
import Routers from './Routers';
import Footer from './components/Footer/Footer';
function App() {
    return (
        <BrowserRouter>
            <Wrapper></Wrapper>
            <Routers />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
