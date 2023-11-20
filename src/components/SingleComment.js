import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment,updateFunction}) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTVhN2VjZWUxMjM2NjAwMTgxNzQ1NmYiLCJpYXQiOjE3MDA0Mjk1MTgsImV4cCI6MTcwMTYzOTExOH0.lrQVtahFptJdg2z1DmqToOKozDez2IAnpYmB0E7rSs0',
          },
        }
      )
      if (response.ok) {
        alert('Commento è stato eliminato!');
        updateFunction();
      } else {
        throw new Error('Commento non è stato eliminato!');
      }
    } catch (error) {
      alert(error);
    }
  };
  
  return (
    <ListGroup.Item data-testid="single-comment" className="d-flex justify-content-between">
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
      Rimuovi
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment

