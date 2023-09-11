import React, { useState, useEffect } from "react";

/**
 * html >head > title 태그를 업데이트하는 훅 입니다.
 * @param {string} initialTitle
 * @returns {function setTitle(string)}
    
 }}
 */
const useTitle = function (initialTitle) {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = function () {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);
  return setTitle;
};

export default useTitle;
