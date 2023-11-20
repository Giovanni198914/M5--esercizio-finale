import { Row, Tab, Tabs, Col } from "react-bootstrap";
import React, { useState } from "react";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json"
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BooksByGenre = {
  fantasy,
  history,
  horror,
  romance,
  scifi,
};

const AllTheBooks = ({ query }) => {
  const [selectedGenre, setSelectedGenre] = useState("fantasy");
  const [selected, setSelected] = useState(false)


  const books = BooksByGenre[selectedGenre];

  const booksByQuery = (book) =>
    book.title.toLowerCase().includes(query.toLowerCase());
  return (
      <Row>
        <Col md={8}>
          <Tabs
            id="justify-tab-example"
            onSelect={(genre) => setSelectedGenre(genre)}
          >
            {Object.keys(BooksByGenre).map((genre) => (
              <Tab
                eventKey={genre}
                title={<span
                >{genre.toUpperCase()}</span>}
              />
            ))}
          </Tabs>
          <Row className="column-gap-5 mt-5 row-gap-3">
            {books.filter(booksByQuery).map((book) => (
              <Col xs={12} md={3} key={book.asin}>
                <SingleBook book={book}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Col>
          ))}
          </Row>
        </Col>
        <Col md={4}>
        <h3 className={`mt-5`}> Recensioni </h3>
            <hr />
          <CommentArea asin={selected} />
        </Col>
      </Row>
  )
}
export default AllTheBooks

