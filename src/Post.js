import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = ({ classContent, children }) => (
  <div className="postWrapper">
    <PostHeader />
    <div className={classContent}>{children}</div>
  </div>
);

Post.defaultProps = {
  classContent: 'contentWrapper',
  children: '',
};

Post.propTypes = {
  classContent: PropTypes.string,
  children: PropTypes.string,
};

export default Post;
