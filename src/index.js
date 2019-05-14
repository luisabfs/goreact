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
          id: 1,
          img:
            'https://user-images.githubusercontent.com/21061462/57669947-920f1a00-75e3-11e9-8461-ca11e0c62665.png',
          name: 'Alicia Florrick',
          time: '1min ago',
          content:
            'Expect to be wrong. It’ll happen, and it’s a good thing. Why? Because you will gain an opportunity to learn something new.',
        },
        {
          id: 2,
          img: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
          name: 'Eli Gold',
          time: '10min ago',
          content:
            'When this happens, it’s a chance to be vulnerable and admit you made a mistake. Being vulnerable is what opens us up to making the best connections with those around us.',
        },
        {
          id: 3,
          img:
            'https://user-images.githubusercontent.com/21061462/57669930-81f73a80-75e3-11e9-925f-00f6b8694f5c.jpg',
          name: 'Diane Lockhart',
          time: '18min ago',
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
        <div className="postContainer">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
