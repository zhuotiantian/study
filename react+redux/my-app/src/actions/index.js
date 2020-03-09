import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT } from "./actionTypes";

let nextTodoId = 0;
/**
 * 新增待办事项
 * @param {*} id :待办事项id
 * @param {*} text :待办事项内容
 */
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});
/**
 * 更改待办事项
 * @param {*} id
 */
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
/**
 * 设置过滤状态
 * @param {*} filter
 */
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});
/**
 * 设置新增待办事项的文本
 * @param {*} text
 */
export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
});
