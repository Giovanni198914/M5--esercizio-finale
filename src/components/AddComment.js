import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddComment = ({ asin,updateFunction}) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 0,
    elementId: null,
  });

  const [commentSent, setCommentSent] = useState(false);

  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: asin,
    }));
  }, [asin]);

  const handleRating = (e) => {
    setComment({
      ...comment,
      rate: parseInt(e.target.value, 10),
    });
  };

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTVhN2VjZWUxMjM2NjAwMTgxNzQ1NmYiLCJpYXQiOjE3MDA0Mjk1MTgsImV4cCI6MTcwMTYzOTExOH0.lrQVtahFptJdg2z1DmqToOKozDez2IAnpYmB0E7rSs0',     
          },
        }
      );
      if (response.ok) {
        alert('Il tuo commento è stato inviato!');
        setCommentSent(true);
        setComment({
          comment: '',
          rate: 0,
          elementId: null,
        });
        updateFunction();
      } else {
        throw new Error('Errore! Controlla per favore!.');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label> Commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Scrivi qui il tuo commento"
            className="text-center"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label> Recensione </Form.Label>
          <section className="d-flex justify-content-center align-items-center gap-2">
            {[1, 2, 3, 4, 5].map((option) => (
              <Form.Check
                inline
                type="radio"
                label={option}
                value={option}
                checked={comment.rate === option}
                onChange={handleRating}
                key={option}
                disabled={commentSent}
              />
            ))}
          </section>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
