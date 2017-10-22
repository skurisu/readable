import React from 'react';
import { convertTime } from '../../utlis/helpers';

const PostDetails = props => {
  return (
    <div style={{ marginBottom: 5 }}>
      <span>Posted by</span>
      <span>
        <strong>{props.author}</strong>
      </span>
      <span>{convertTime(props.timestamp)}</span>
    </div>
  );
};

export default PostDetails;
