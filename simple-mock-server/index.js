import mockserver from '@funq/mock-server';

mockserver.startMockServer("./mock_data/config", "./mock_data/data", 
{"/test": {
  "idName": "testId",
  "requestType": "CUSTOM",
  "otherConfig": {"custom_attr1": "value1"},
  "response": function (request, response, requestConfig) {
    response.status(400).send({"success":"test successful!!!!!!!!!"});
  } 
} }, 3000);