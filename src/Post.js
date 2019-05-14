import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = ({ data }) => (
  <div className="postWrapper">
    <PostHeader data={data} />
    <div className="contentWrapper">{data.content}</div>
  </div>
);

Post.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Post;
