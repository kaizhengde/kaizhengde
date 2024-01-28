import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from '@/app/home/home.tsx';
import LinearAlgebra from '@/app/linear-algebra/linear-algebra.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linear-algebra" element={<LinearAlgebra />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
