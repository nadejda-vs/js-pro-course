import React from 'react';

	const symbols = [
		{
			title: '100',
			symbol: '💯',
			keywords:
				'hundred points symbol symbol wow wow win win perfect perfect parties parties',
		},
		
		{
			title: 'Regional Indicator a',
			symbol: '🇦',
			keywords: 'regional indicator symbol letter a',
		},
	];


function Symbol(props) {
   const sidebar = (
    <ul>
      {props.symbols.map((head) =>
        <li>
          {head.title}
        </li>
      )}
    </ul>
  );
 
  const content = props.symbols.map((post) =>
    <div >
      <p>{post.symbols}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
export default Symbol;

