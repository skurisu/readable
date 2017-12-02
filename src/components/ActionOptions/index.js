import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

const ActionOptions = props => {
  return (
    <div>
      <Icon
        link
        color="green"
        name="arrow up"
        onClick={props.onVote('upVote')}
      />
      <span>
        <strong>{props.voteScore}</strong>
      </span>
      <Icon
        link
        color="red"
        name="arrow down"
        style={{ marginLeft: 3.5 }}
        onClick={props.onVote('downVote')}
      />
      {props.commentLength >= 0 && (
        <span style={{ color: '#2185d0', marginRight: 5, marginLeft: 5 }}>
          <strong>{props.commentLength}</strong>
          <Icon name="comment" />
        </span>
      )}
      <Icon
        link
        name="edit"
        onClick={() => {
          props.toggleEditForm(true);
        }}
      />
      <Icon link color="red" name="delete" onClick={props.onDelete} />
    </div>
  );
};

export default ActionOptions;
