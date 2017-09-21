import React from 'react';

const TodoList = (props) => {
	let list = props.list.map(item => <li key={item.id} onClick = {() => props.remove(item.id)}>{item.text}</li>);
	return <ul>{list}</ul>;
}

export default TodoList;