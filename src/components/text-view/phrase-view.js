import React from "react";

export default function PhraseView({ timeStart, words }) {
  return (
    <div>
      <time>{timeStart}</time>
      {words.map(({ word, timeStart }) => {
            const [ceil, float] = String(timeStart).split('.');

            return [<span ceil={ceil} float={float} key={timeStart} time-start={timeStart}>{word}</span>, ' ']
      })}
    </div>
  );
}
