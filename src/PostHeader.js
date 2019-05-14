import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({
  classHeader, classImg, classSpan, classUser, data,
}) => (
  <div className={classHeader}>
    <img src={data.img} className={classImg} alt="Profile" />
    <div className={classSpan}>
      <h3 className={classUser}>{data.name}</h3>
      <span>{data.time}</span>
    </div>
  </div>
);

PostHeader.defaultProps = {
  classHeader: 'postHeaderWrapper',
  classImg: 'profileImg',
  classSpan: 'headerInfo',
  classUser: 'headerUser',
  data: {},
};

PostHeader.propTypes = {
  classHeader: PropTypes.string,
  classImg: PropTypes.string,
  classSpan: PropTypes.string,
  classUser: PropTypes.string,
  data: PropTypes.objectOf(PropTypes.shape),
};

export default PostHeader;
