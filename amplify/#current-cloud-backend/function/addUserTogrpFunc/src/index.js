

const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
const { sub } = event.request.userAttributes; // Get the user's unique identifier
const userPoolId = 'YOUR_USER_POOL_ID';
const groupName = 'YOUR_GROUP_NAME';

try {
await cognito.adminAddUserToGroup({
UserPoolId: userPoolId,
Username: sub,
GroupName: groupName,
}).promise();

console.log(`Added user ${sub} to group ${groupName}`);
} catch (error) {
console.error('Error adding user to group:', error);
throw error;
}
};