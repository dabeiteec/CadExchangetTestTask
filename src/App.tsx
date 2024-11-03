import { BrowserRouter  } from 'react-router-dom'; 
import Layout from './components/global/layout';
import GlobalStyles from './components/global/global-styles';


function App() {

  return (
    <BrowserRouter basename="/CadExchangetTestTask">
        <GlobalStyles/>
        <Layout />
    </BrowserRouter>
  );
}

export default App;
