import React, { Component } from 'react';

import SortableTree from '../src';

// import styles from './generic.css';

// In your own app, you would need to use import styles once in the app
// import 'react-sortable-tree/styles.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { title: 'Chicken', expanded: true, children: [{ title: 'Egg1' }] },
      ],
    };
  }

  render() {
    return (
      <div style={{ height: 300 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          generateNodeProps={({ node, path }) => ({
            itemClassName:
              node.title === 'Egg1'
                ? 'rst__moveHandle_another'
                : 'rst__moveHandle',
            hasEndStaff: (
              <input
                type="text"
                style={{
                  marginBottom: 29,
                  marginLeft: 17,
                  verticalAlign: 'middle',
                }}
              />
            ),
          })}
        />
      </div>
    );
  }
}
