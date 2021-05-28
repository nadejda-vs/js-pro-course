import { EmojiItem } from '../EmojiItem';
export const ListItem = ({ array }) => {
  function getID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

    return (
        <div className='ListItem'>
            {array.map((element) => {
            return <EmojiItem key={getID()} emoji= {element.symbol} emojiDescription = {element.title} />         
            })}
         </div>
)
}