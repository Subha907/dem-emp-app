// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Employee } = initSchema(schema);

export {
  Employee
};