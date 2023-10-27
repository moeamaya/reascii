import React, { createContext, useContext, useState } from 'react';
import { generateDOMText, extractLinesFromTextNode } from '../util/countLines';

const RowContext = createContext();

export function useRow() {
  return useContext(RowContext);
}

export function Row({ children }) {
  const [columnLineCounts, setColumnLineCounts] = useState({});

  const updateLineCount = (columnId, lineCount) => {
    setColumnLineCounts((prevCounts) => ({
      ...prevCounts,
      [columnId]: lineCount,
    }));
  };

  const getMaxLineCount = () => {
    const lineCounts = Object.values(columnLineCounts);
    return Math.max(...lineCounts);
  };

  const getLineCount = (text, containerWidth) => {
    const textNode = generateDOMText(text, containerWidth);
    const lines = extractLinesFromTextNode(textNode);
    return lines.length;
  }

  return (
    <RowContext.Provider value={{ updateLineCount, getMaxLineCount, getLineCount }}>
      <div>
        {children}
      </div>
    </RowContext.Provider>
  );
}
