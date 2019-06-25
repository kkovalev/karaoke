import React from "react";
import PhraseView from "./phrase-view";
import jsonData from "../../json";

export default function() {
  return (
    <div>
      {jsonData.map(phraseData => 
        <PhraseView {...phraseData} key={phraseData.timeStart} />
      )}
    </div>
  );
}
