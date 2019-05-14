import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ data }) => (
  <div className="postHeaderWrapper">
    <img src={data.img} className="profileImg" alt="Profile" />
    <div className="headerInfo">
      <h3 className="headerUser">{data.name}</h3>
      <span>{data.time}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default PostHeader;
