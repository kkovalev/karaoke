import React from "react";

// TODO pure
export default function PhraseView({ timeStart, words }) {
  return (
    <div>
      <time>{timeStart}</time>
      {words.map(({ word, timeStart }) => {
        return [<span time-start={timeStart} key={timeStart}>{word}</span>, ' ']
      })}
    </div>
  );
}
