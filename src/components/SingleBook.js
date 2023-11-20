import { Card, Image } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { EyeFill } from 'react-bootstrap-icons';


function SingleBook({ book, selected, setSelected }) {
  const navigate = useNavigate();

  return (
    <>
      <Card
        onClick={() => {
          setSelected(book.asin);
        }}
        style={{
          width: '16rem',
          outline: selected === book.asin ? '3px solid red' : '3px solid transparent',
        }}
        data-testid="book-card"
      >
        <Image
          src={book.img}
          className="pt-2"
          style={{
            height: "270px",
            variant: "top",
          }}
        />
        <Card.Body>
          <h6 className="text-truncate mb-4">{book.title}</h6>
          <button className="btn btn-primary rounded">
            {book.price} Euro
          </button>
          <hr/>
          <button className="btn btn-primary" onClick={() => navigate(`/details/${book.asin}`)}>
          <EyeFill className="me-2" /> Vedi dettagli
          </button>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleBook;
