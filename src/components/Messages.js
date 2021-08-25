import '../styles/Messages.css';
import useMessageContext from '../contexts/MessageContext';

function Messages() {
  const [{messages}] = useMessageContext();
  return (
    <div className="messages">
      {messages && messages.map(message => {
        const classes = (message.status >= 200 && message.status < 300) ? `messages__message success ${message.id}` : `messages__message error ${message.id}`;
        return (
          <div className={classes} key={message.id}>
            <small onClick={() => {
              document.getElementsByClassName(message.id)[0].classList.add('messages__closed');
            }}><b><i className="fas fa-times"></i></b></small>
            <p>{message.message}</p>
          </div>
        );
      })}
    </div >
  );
}

export default Messages;
