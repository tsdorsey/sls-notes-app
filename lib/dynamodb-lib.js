import AWS from 'aws-sdk';

const credentials = new AWS.SharedIniFileCredentials({
  profile: process.env.AWS_PROFILE,
});
AWS.config.credentials = credentials;
AWS.config.update({ region: process.env.AWS_REGION });

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}
