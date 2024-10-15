import type { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context) => {
  // arguments typed from `.arguments()`
  const { message } = event.arguments
  // return typed from `.returns()`
  return `Hello, ${message}!`
};