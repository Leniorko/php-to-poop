const poopifyNodeContent = (node) => {
  if (node.nodeType === Node.TEXT_NODE) {
    node.nodeValue = node.nodeValue.replace(/[pPhH]{3}/gi, "💩");
  }
  if (node.hasChildNodes()) {
    for (let child of node.childNodes) {
      poopifyNodeContent(child);
    }
  }
};

poopifyNodeContent(document.body);
