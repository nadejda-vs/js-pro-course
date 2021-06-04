import { EmojiItem } from '../EmojiItem';
export const EmojiList = ({ emojies }) => {
    function getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
    return (
        <div>
             {emojies.map((element) => {
        return <EmojiItem key={getID()} symbol={element.symbol} title={element.title} />
      })}
        </div>
)
}
