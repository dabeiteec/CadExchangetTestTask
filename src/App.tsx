
import { BrowserRouter } from 'react-router-dom'; 
import Layout from './components/global/Layout';
import GlobalStyles from './components/global/global-stylex';


function App() {

  return (
    <BrowserRouter>
        <GlobalStyles/>
        <Layout />
    </BrowserRouter>
  );
}

export default App;
