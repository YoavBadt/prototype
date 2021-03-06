import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

// import expect from 'expect'
// import deepFreeze from 'deep-freeze'

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
          completed: !state.completed
      };
    default: 
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({todos, visibilityFilter});



const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
         t => t.completed
        );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
  };
};




const Link = ({
  active,
  children,
  onClick
}) => {
  if(active){
    return <span>{children}</span>
  }
  return(
    <a href='#'
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      >
      {children}
      </a>
    );
};

class FilterLink extends React.Component{
  componentDidMount(){
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
   componentWillUnmount() {
    this.unsubscribe();
  }
  render(){
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return(
      <Link 
        active={
          props.filter ===
          state.visibilityFilter
        }
        onClick={()=>
          store.dispatch({
            type:'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }
      >
        {props.children}
      </Link>
    );
  }
}
FilterLink.contextTypes = {
  store: React.PropTypes.object
}

const Footer = () => (
  <p>
    show:
    {' '}
    <FilterLink 
      filter='SHOW_ALL'
    >
      All
    </FilterLink>
    {' '}
    <FilterLink 
      filter='SHOW_ACTIVE'
      >
      Active
    </FilterLink>
    {' '}
    <FilterLink 
      filter='SHOW_COMPLETED'
      >
      Completed
    </FilterLink>

  </p>
);
const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:completed ?
        'line-through' :
        'none'
    }}
  >
    {text}
  </li>
);

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo 
        key={todo.id}
        {...todo}
        onClick={()=>onTodoClick(todo.id)}
      />
    )}
  </ul>
);

let nextTodoId= 0;

const AddTodo = (props,{ store }) => {
  let input;
  return(
    <div>
      <input ref={node => {
          input= node;
        }} />
      <button onClick={()=>{
         store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text : input.value
          })
        input.value = '';
      }}>
      Add Todo
      </button>
    </div>
  );
};
AddTodo.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick : id => {
      dispatch({
        type: 'TOGGLE_TODO',
        id
      })
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(TodoList);


const TodoApp = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

const store = createStore(todoApp);



ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app-root')
);
