import type { Handler } from 'aws-lambda';
import type { Schema } from "../../data/resource"

export const handler: Schema["chatapi"]["functionHandler"] = async (event) => {
  // arguments typed from `.arguments()`
  const { message } = event.arguments
  // return typed from `.returns()`
  return `Hello, ${message}!`
};