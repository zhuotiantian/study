import { createStore } from "redux";
import rootReducer from "./reducer/index";
import { addTodo, toggleTodo, setFilter, setTodoText } from "./actions/index";

/**
 * createStore的第二个参数是可选的，可以用于初始化state
 */
const store = createStore(rootReducer);
console.log(store.getState());

// 订阅state的变化
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
/**
 * 派发actions
 */
store.dispatch(addTodo("Learn about actions"));
store.dispatch(toggleTodo(0));
store.dispatch(setFilter("active"));
store.dispatch(setTodoText("Learn"));
// 取消订阅;
unsubscribe();
