import React from 'react';
import { connect } from 'react-redux';

const TodoList = props => {
  console.log(props.items);
  return (
    <ul>
      {props.items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

// export default TodoList;
export default connect(mapStateToProps)(TodoList);
