import Immutable from 'immutable';

import RequestRecord from 'records/RequestRecord';
import PropertyRecord from 'records/PropertyRecord';
import ResponseRecord from 'records/ResponseRecord';

const definition = new Immutable.Map({
  title: "Test API title",
  version: "1.0.0",
  description: "Definition description",
  navigation: new Immutable.Map({ // could be moved to separate object / state
    order: new Immutable.Map({
      title: "Order",
      methods: new Immutable.Map({
        post: new Immutable.Map({
          title: "POST /orders",
          link: "#order/post"
        }),
        get: new Immutable.Map({
          title: "GET /orders",
          link: "#order/get"
        })
      })
    }),
    shipment: new Immutable.Map({
      title: "Shipment",
      methods: new Immutable.Map({
        post: new Immutable.Map({
          title: "POST /shipments",
          link: "#shipment/post"
        }),
        get: new Immutable.Map({
          title: "GET /shipments",
          link: "#shipment/get"
        })
      })
    })
  }),
  services: new Immutable.Map({
    order: new Immutable.Map({
      title: "Order",
      methods: new Immutable.Map({
        post: new Immutable.Map({
          type: "POST",
          link: "#order/post",
          summary: "POST /orders",
          description: "Method description",
          request: RequestRecord.createFromJS({
            description: "Request description",
            schema: new Immutable.Map({
              property1: PropertyRecord.createFromJS({
                name: "property1",
                type: "string",
                description: "Property1 description",
                required: false
              }),
              property2: PropertyRecord.createFromJS({
                name: "property2",
                type: "string",
                description: "Property2 description",
                required: false
              })
            }),
            example: "{some: json}"
          }),
          responses: new Immutable.Map({
            201: ResponseRecord.createFromJS({
              code: "201",
              description: "Response description",
              schema: new Immutable.Map({
                property1: PropertyRecord.createFromJS({
                  name: "property1",
                  type: "string",
                  description: "Property1 description",
                  required: false
                })
              }),
              isOk: true
            })
          })
        }),
        get: new Immutable.Map({
          type: "GET",
          summary: "GET /orders",
          link: "#order/get",
          description: "Method description",
          parameters: new Immutable.Map({
            query: new Immutable.Map({
              offset: PropertyRecord.createFromJS({
                name: "offset",
                description: "Parameter description",
                required: false,
                type: "number"
              })
            })
          })
        })
      })
    }),
    shipment: new Immutable.Map({
      title: "Shipment",
      methods: new Immutable.Map({
        post: new Immutable.Map({
          type: "POST",
          link: "#shipment/post",
          summary: "POST /shipments",
          description: "Method description",
          request: RequestRecord.createFromJS({
            description: "Request description",
            schema: new Immutable.Map({
              property1: PropertyRecord.createFromJS({
                name: "property1",
                type: "string",
                description: "Property1 description",
                required: false
              }),
              property2: PropertyRecord.createFromJS({
                name: "property2",
                type: "string",
                description: "Property2 description",
                required: true
              })
            }),
            example: "{some: json}"
          }),
          responses: new Immutable.Map({
            201: ResponseRecord.createFromJS({
              code: "201",
              description: "Response description",
              schema: new Immutable.Map({
                property1: PropertyRecord.createFromJS({
                  name: "property1",
                  type: "string",
                  description: "Property1 description",
                  required: false
                })
              }),
              isOk: true
            })
          })
        }),
        get: new Immutable.Map({
          type: "GET",
          link: "#shipment/get",
          summary: "GET /shipments",
          description: "Method description",
          parameters: new Immutable.Map({
            query: new Immutable.Map({
              offset: PropertyRecord.createFromJS({
                name: "offset",
                description: "Parameter description",
                required: false,
                type: "number"
              })
            })
          })
        })
      })
    })
  })
});

export default function getDefinition() {
  return {
    type: 'GET_DEFINITION',
    payload: definition
  };
}