import React from 'react';
import { Spinner } from 'react-bootstrap';

function BlueSpinner() {
  return (
    <>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
        style={{ marginRight: '5px', borderColor: 'blue' }}
      />
      <span className="visually-hidden">Loading...</span>{' '}
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
        style={{ marginRight: '5px', color: 'blue' }}
      />
      Loading...
    </>
  );
}

export default BlueSpinner;
