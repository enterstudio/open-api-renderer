/**
 * Construct UI ready property object from given inputs
 *
 * @param {String} nodeName
 * @param {Object} propertyNode
 * @param {Boolean} required
 *
 * @return {Object}
 */
function getPropertyNode(nodeName, propertyNode, required = false) {
  const nodeType = propertyNode.type || 'string';

  const outputNode = {
    name: nodeName,
    type: nodeType,
    required
  };

  if (propertyNode.description) {
    outputNode.description = propertyNode.description;
  }

  if (nodeType === 'string' || nodeType === 'number') {
    return outputNode;
  } else if (nodeType === 'object') {
    const propertiesNode = getPropertiesNode(propertyNode.properties, propertyNode.required);

    if (propertiesNode !== undefined && propertiesNode.length > 0) {
      outputNode.properties = propertiesNode;
    }

    return outputNode;
  } else if (nodeType === 'array') {
    if (propertyNode.items) {
      const arrayItemType = propertyNode.items.type;

      if (arrayItemType === 'object') {
        const propertiesNode = getPropertiesNode(propertyNode.items.properties, propertyNode.items.required);

        if (propertiesNode !== undefined && propertiesNode.length > 0) {
          outputNode.properties = propertiesNode;
        }
      } else {
        outputNode.subtype = arrayItemType;
      }
    }

    return outputNode;
  }

  return null;
}

/**
 * Construct UI ready properties object from given inputs.
 *
 * @param {Object} propertiesNode
 * @param {Array} requiredProperties
 *
 * @return {Object}
 */
function getPropertiesNode(propertiesNode, requiredProperties = []) {
  const outputNode = [];

  for (const key in propertiesNode) {
    if (propertiesNode.hasOwnProperty(key)) {
      const property = propertiesNode[key];
      const value = getPropertyNode(key, property, requiredProperties.includes(key));

      if (value) {
        outputNode.push(value);
      }
    }
  }

  return outputNode;
}

/**
 * Converts json schema object to new object ready to be consumed by React components
 *
 * @param {Object} jsonSchema
 *
 * @return {Object}
 */
export default function getUIReadySchema(jsonSchema) {
  const schema = getPropertiesNode(jsonSchema.properties, jsonSchema.required);

  return schema;
}