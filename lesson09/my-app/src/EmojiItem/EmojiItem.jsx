import emoji from "../emoji.json"



export const EmojiItem=(props) => {

   return (
    <div className="App">
      <ul >
        {emoji.map((item) => (
			<p>{item.title} {item.symbol}</p>

        ))}

      </ul>
	</div>
	)



}