
import emojiArr from '../../emoji.json'

export const EmojiItem = (props) => {
    return (
    <div className="App">
      <ul >
        {emojiArr.map((item) => (
		console.log(	<p>{item.title} {item.symbol}</p>)
		
        ))}
	
      </ul>
	</div>
	)
}

