
import { BrowserRouter } from 'react-router-dom'; 
import Layout from './components/global/Layout';

function App() {

  return (
    <BrowserRouter> {/* Оборачиваем Layout в BrowserRouter */}
      <div>
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
