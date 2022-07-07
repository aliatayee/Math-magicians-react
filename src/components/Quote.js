import React, { useState } from 'react';

const Quote = () => {
  const [quotes, setQuote] = useState('');
  const updateQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    if (response.ok) {
      setQuote({
        quote: data.content,
        author: data.author,
      });
    } else {
      setQuote({
        quote: 'We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.',
        author: 'Buddha',
      });
    }
  };
  return (
    <div className="container mx-auto flex flex-wrap items-center flex-col justify-center text-white">
      <div className="border border-slate-600 rounded-md p-5 ">
        <blockquote className="blockquote mb-0">
          <p>{quotes.quote}</p>
          <footer className="blockquote-footer">
            <cite>
              ___
              {quotes.author}
            </cite>
          </footer>
        </blockquote>

      </div>
      <div>
        <button type="button" onClick={updateQuote} className="rounded text-black bg-violet-400 pb-2 pt-2 mt-5 bg-black pr-3 pl-3">
          Generate quote
        </button>
      </div>
    </div>
  );
};
export default Quote;
