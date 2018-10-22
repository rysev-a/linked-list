import React, { Component } from 'react';
import { LinkedList } from './LinkedList';
import { Button } from './Button';

export class ListView extends Component {
  constructor(props) {
    super(props);
    this.linkedList = new LinkedList(this.props.iterable);

    // init state
    this.state = {
      values: this.linkedList.values(),
      size: this.linkedList.size(),
      linkedList: this.linkedList,
      reveredLinkedList: null,
    };
  }

  update = () => {
    this.setState({
      values: this.linkedList.values(),
      size: this.linkedList.size(),
      linkedList: this.linkedList,
    });
  };

  append = elements => {
    this.linkedList.append(elements);
    this.update();
  };

  reset = () => {
    this.linkedList.reset();
    this.update();
  };

  push = value => {
    this.linkedList.push(value);
    this.update();
  };

  reverse = () => {
    this.linkedList.reverse();
    this.update();
  };

  reverseImmutable = () => {
    const reveredLinkedList = this.linkedList.reverseImmutable();
    this.setState({ reveredLinkedList });
  };

  render() {
    return (
      <div className="linked-list">
        <div className="columns">
          <div className="column">
            <h3 className="has-text-weight-normal">Size: {this.state.size}</h3>
            <h3 className="has-text-weight-normal">Values:</h3>
            <div className="tags">
              {this.state.values.map((value, index) => (
                <span className="tag" key={index}>
                  {value}
                </span>
              ))}
            </div>
            {this.linkedList.iterable && (
              <div className="iterable">
                <h3 className="has-text-weight-normal">
                  Iterate with [...linkedList]:
                </h3>
                <div className="tags">
                  {[...this.state.linkedList].map((value, index) => (
                    <span className="tag" key={index}>
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {this.state.reveredLinkedList && (
              <div className="reversed">
                <br />
                <h3 className="has-text-weight-normal">
                  Immutable reversed linkedList:
                </h3>
                <div className="tags">
                  {[...this.state.reveredLinkedList].map((value, index) => (
                    <span className="tag" key={index}>
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="column">
            <Button
              onClick={() => this.append(['appended', 'appended'])}
              title="apend"
            />
            <Button onClick={() => this.reset()} title="reset" />
            <Button
              onClick={() => this.reverseImmutable()}
              title="reverse immutable"
            />
            <Button onClick={() => this.reverse()} title="reverse" />
            <Button onClick={() => this.push('pushed')} title="push" />
            <Button
              color="success"
              onClick={() => console.log(this.linkedList)}
              title="console.log list"
            />
          </div>
        </div>
      </div>
    );
  }
}
