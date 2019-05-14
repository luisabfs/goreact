import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = ({ classContent, data }) => (
  <div className="postWrapper">
    <PostHeader data={data} />
    <div className={classContent}>{data.content}</div>
  </div>
);

Post.defaultProps = {
  classContent: 'contentWrapper',
  data: {},
};

Post.propTypes = {
  classContent: PropTypes.string,
  data: PropTypes.objectOf(PropTypes.shape),
};

export default Post;
