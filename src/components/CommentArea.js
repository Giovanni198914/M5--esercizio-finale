import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

const CommentArea = ({ asin,updateFunction}) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getComments = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTVhN2VjZWUxMjM2NjAwMTgxNzQ1NmYiLCJpYXQiOjE3MDA0Mjk1MTgsImV4cCI6MTcwMTYzOTExOH0.lrQVtahFptJdg2z1DmqToOKozDez2IAnpYmB0E7rSs0',
          },
        }
      );

      if (response.ok) {
        let comments = await response.json();
        setComments(comments);
        setIsLoading(false);
        setIsError(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    if (asin) {
      getComments();
    }
  }, [asin]);

    return (
    <div className="text-center mb-2">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} updateFunction={getComments} />
      <CommentList
        commentsToShow={comments}
        updateFunction={getComments}
      />
    </div>
  );
};

export default CommentArea;
