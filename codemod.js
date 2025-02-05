#!/usr/bin/env node
"use strict";

module.exports = function (fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find the createSvgIcon calls.
  root
    .find(j.CallExpression, {
      callee: {
        name: "createSvgIcon",
      },
    })
    .forEach(path => {
      // Expect that the first argument is an array literal.
      const firstArg = path.node.arguments[0];
      if (firstArg && firstArg.type === "ArrayExpression") {
        firstArg.elements.forEach((element, idx) => {
          // We want to add a 'key' prop to JSXElement nodes only.
          if (
            element &&
            (element.type === "JSXElement" || element.type === "JSXFragment")
          ) {
            // Check if the opening element (or first tag in a fragment) already has a key.
            const openingElement = element.type === "JSXFragment"
              ? null
              : element.openingElement;
            // If there is an openingElement and it doesn't have a key attribute, add one.
            if (openingElement) {
              const hasKey = openingElement.attributes.some(attr => {
                // attr might be a JSXSpreadAttribute so check that it has a name.
                return attr.name && attr.name.name === "key";
              });

              if (!hasKey) {
                // Create a new JSXAttribute for the key, using the index as a string.
                const keyAttr = j.jsxAttribute(
                  j.jsxIdentifier("key"),
                  j.literal(String(idx))
                );
                openingElement.attributes.push(keyAttr);
              }
            }
          }
        });
      }
    });

  return root.toSource();
};
