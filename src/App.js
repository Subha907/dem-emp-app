import { Amplify } from 'aws-amplify';
import EmployeeTable from "../src/comp/EmployeeTable"
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <EmployeeTable />
      
    </>
  );
}

export default withAuthenticator(App);
