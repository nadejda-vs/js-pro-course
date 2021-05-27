
import { useState } from "react";
import emojiArr from '../JSON/emoji.json'

export const Symbol = (props) => {
    return (
    <div className="App">
      <ul >
        {emojiArr.map((item) => (
			<p>{item.title} {item.symbol}</p>
		
        ))}
	
      </ul>
	</div>
	)
}

