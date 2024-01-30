import { Route, Routes } from 'react-router-dom';
import {HomePage, VacanciesPage} from './pages';

function App() {
  return (
    <Routes>
      <Route path='/'element={<HomePage />}/>
      <Route path='/vacancies' element={<VacanciesPage />}/>
    </Routes>
  );
}

export default App;
