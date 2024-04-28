// @ts-check
/**
 * 
 * @see Also https://www.toptal.com/javascript/emulating-react-jsx-in-vanilla-javascript
 * @see https://dev.to/rrsai/the-subtle-case-for-and-against-react-apf
 */

const { log, debug, error: eLog } = console || { log: () => { /* noop */ }, debug: () => { /* noop */ }, error: () => { /* noop */ } };

const skeleton = (content, placeholder = '*****', loading) => {
  // display a skeleton area of the number of characters of what is provided
  return `
    <span class='${loading ? 'skeleton' : ''}'>
        ${loading ? placeholder : content}
    </span>
    `

}

const chat = ({ title, messages, loading }) => {
  debug('messages', messages);
  const finalMessages = loading || true ? [1, 2, 3, 4, 5] : messages;
  return `
    <div class='top-bar'>
      <header>${title}</header>
      <ul>
          ${finalMessages.map(message => `<li>${skeleton(message, '********************', loading)}</li>`).join('')}
      </ul>
    </div >
    `
}

const dataQuery = async () => {
  // fetch data from the server
  let data, errorMessage, loading = true;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    data = response.json();
    loading = false;
  } catch (error) {
    //eLog(error);
    eLog('Whatever man');
    errorMessage = error.message;
    data = null;
  }
  return [data, loading, errorMessage];
}

/**
 * Will get rendered by render.js
 * @returns {Promise<string>}
 */
export const app = async () => {
  let messages, errorMessage, loading = true;
  try {
    [messages, loading, errorMessage] = await dataQuery();
  } catch (error) {
    eLog(error);
    errorMessage = error.message;

    messages = [];
  }
  debug('messages after dataQuery', messages);
  const chatConfig = {
    title: 'Chat',
    messages: messages,
    loading: messages && messages.length ? false : true,
  }
  return `
    <section>
      <h1>Chat App</h1>
      ${errorMessage ? `<p>${errorMessage}</p>` : ''}
      <div>
        ${chat(chatConfig)}
      </div>
    </section>
    `;

}
