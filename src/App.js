import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import { Container, Row} from 'react-bootstrap';
import AllTheBooks from './components/AllTheBooks';
import { useState } from 'react';
import BookDetails from "./components/BookDetails";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from "./components/PageNotFound";

function App() {
  const [query, setQuery] = useState("");
  return (
    <BrowserRouter>
        <div>
          <NavBar query={query} setQuery={setQuery} />
          <Container>
            <Welcome />
            <Row>
              <h3>Tutti i libri </h3>
              <hr />
              <Routes>
                <Route path="/" element={<AllTheBooks query={query} />} />
                <Route path="/details/:asin" element={<BookDetails />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Row>
            <Footer />
          </Container>
        </div>
    </BrowserRouter>
  );
}
export default App;
