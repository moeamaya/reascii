type Line = {
  text: string
  count: number
}

interface TextNode {
  textContent: string;
}

const collapseWhiteSpace = (value) => {
  return value.trim().replace(/\s+/g, " ");
};

export const generateDOMText = (text: string, width: number): Text => {
  const textNode = document.createTextNode(text);
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.top = "500px";
  // div.style.top = "-9999px";
  // div.style.left = "-9999px";
  // div.style.visibility = "hidden";
  div.style.width = width + "px";
  div.appendChild(textNode);
  document.body.appendChild(div);
  return textNode;
};

export const extractLinesFromTextNode = (textNode: TextNode): String[] => {
  textNode.textContent = collapseWhiteSpace(textNode.textContent);
  const textContent = textNode.textContent;
  const range = document.createRange();
  const lines: any[][] = [];
  let lineCharacters: any[] = [];

  for (var i = 0; i < textContent.length; i++) {
    range.setStart(textNode as Node, 0);
    range.setEnd(textNode as Node, i + 1);

    const lineIndex = range.getClientRects().length - 1;

    if (!lines[lineIndex]) {
      lines.push(lineCharacters = [])
    }

    lineCharacters.push(textContent.charAt(i));
  }

  return lines.map(characters => collapseWhiteSpace(characters.join("")));
}