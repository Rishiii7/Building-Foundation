import { memo, useEffect, useState } from 'react'
import './App.css'
import { CreateConnection } from './component/Chat';

function App() {
  return (
    <>
      <ChatComponent></ChatComponent>
    </>
  )
}

const ChatComponent = memo(() => {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <div className='flex h-screen justify-center bg-zinc-400'>
        <div className='flex flex-col justify-center'>
           <div className='flex flex-col items-center text-white'>
            <label>
                Choose the chat room : { ' ' }
                <select className='rounded-lg text-center p-2 bg-zinc-800 text-white'
                value={roomId} onChange={ e => setRoomId(e.target.value)}>
                  <option value={"general"}>general</option>
                  <option value={"travel"}>travel</option>
                  <option value={"music"}>music</option>
                </select>
            </label>
           </div>

          <div className='flex flex-col pt-3 items-center'>
            <button onClick={ () => setShow(!show)}
                className=' w-32  flex justify-center bg-zinc-800 text-white rounded-lg p-2'
                >
                  {show ? 'Close Chat' : 'Open Chat'}
            </button>
          </div>
          <div className='flex flex-col justify-center pt-3'>
            {show && <hr />}
            {show && <ChatRoom roomId={roomId} />}

          </div>
        </div>
        
      </div>
    </>
  )
});

const ChatRoom = memo( ({roomId}) => {
  const [serverUrl, setServerUrl] = useState('http://localhost:3000');

  useEffect( () => {
    const connection = CreateConnection(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    }
  }, [roomId, serverUrl]);

  return(
    <>
      <div className='pt-3'>
        <div>
          Server URL : <input value={serverUrl} onChange={ e=> setServerUrl(e.target.value)}
          className='p-3 text-center rounded-lg bg-zinc-800 text-white'
          ></input>
        </div>
        <div className='pt-3 text-center'>
          Welcone to {roomId} room !
        </div>
      </div>
    </>
  )
});



export default App
