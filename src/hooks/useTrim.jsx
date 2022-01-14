const useTrim = (str) => {
  const trimStart = (str2) => {
    if (str2.includes('www')) {
      const startTrim = str2.slice(str2.indexOf('www') + 4);

      return startTrim;
    }
    return str.slice(str.indexOf('//') + 2);
  };

  const trim = (str1) => {
    if (str1.endsWith('/')) {
      const endTrim = str1.slice(0, -1);
      return trimStart(endTrim);
    }
    return trimStart(str1);
  };

  const trimmed = trim(str);

  return trimmed;
};

export default useTrim;
