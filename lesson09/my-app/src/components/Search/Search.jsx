import { useState } from 'react';
import { EmojiList} from '../../components';
import { Input } from '../../components'
import emojies from '../../emoji.json';
export const Search = () => {

const [emojiListArr, setEmojiListArr] = useState([...emojies]);

  const onChangeInput = (element) => {
    let value = element.target.value;
    if (!value) {
      setEmojiListArr([...emojies]);
    } else {
      value = value.toLowerCase();
      setEmojiListArr([
        ...emojies.filter(
          (element) => element.title.toLowerCase().includes(value)
        ),
      ]);
    }
  };
 return (
    <>
      <Input onChange={onChangeInput} />
      <EmojiList emojies={emojiListArr} />
    </>
  );
}