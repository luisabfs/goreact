/* eslint-disable react/no-typos */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-undef */
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          content:
            'Expect to be wrong. It’ll happen, and it’s a good thing. Why? Because you will gain an opportunity to learn something new.',
        },
        {
          content:
            'When this happens, it’s a chance to be vulnerable and admit you made a mistake. Being vulnerable is what opens us up to making the best connections with those around us.',
        },
        {
          content:
            'It is a chance to improve your knowledge and make better connections with your team. Admit your mistakes early and you’ll find others more likely to help you fix the problem you may have caused.',
        },
      ],
    };
  }

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header />
        <div className="postContainer">{posts && posts.map(post => <Post />)}</div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
