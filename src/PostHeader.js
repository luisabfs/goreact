import React from 'react';
import path from 'path';
import PropTypes from 'prop-types';

const img = path.resolve(__dirname, '..', 'assets', 'img_1.jpg');

const PostHeader = ({
  classHeader, classImg, classSpan, classUser,
}) => (
  <div className={classHeader}>
    <img src={img} className={classImg} alt="Profile" />
    <div className={classSpan}>
      <h3 className={classUser}>Luísa Barros</h3>
      <span>há 15min</span>
    </div>
  </div>
);

PostHeader.defaultProps = {
  classHeader: 'postHeaderWrapper',
  classImg: 'profileImg',
  classSpan: 'headerInfo',
  classUser: 'headerUser',
};

PostHeader.propTypes = {
  classHeader: PropTypes.string,
  classImg: PropTypes.string,
  classSpan: PropTypes.string,
  classUser: PropTypes.string,
};

export default PostHeader;
