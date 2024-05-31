import { useEffect } from 'react'
import './App.css'
import { linkedlnAtom, totalLinkedlnSelector } from './atoms'
import { RecoilRoot, useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'
import axios from 'axios'



function App() {



  return (
    <>
      <RecoilRoot>
        <LinkedlnBar />
      </RecoilRoot>
    </>
  )
}


const LinkedlnBar = () =>{

  // const [notificationCount, setNotification] = useRecoilState(notificationAtom);
  // const [jobCount, setJob] = useRecoilState(jobsAtom);
  // const [messageCount, setMessage] = useRecoilState(messagingAtom);
  // const [newtorkCount, setNetwork] = useRecoilState(networkAtom);

  const [linkedlnCount, setLinkedln] = useRecoilState(linkedlnAtom);

  // useEffect(()=>{
  //   // console.log('useEffect')
  //   axios.get('https://sum-server.100xdevs.com/notifications')
  //   .then(  (res) => {
  //     console.log(res)
  //     let linkedlnCountBar = res.data;
  //     console.log(linkedlnCountBar);
      

  //     // update the Atom
  //     // setNetwork( c => linkedlnCountBar.network)
  //     // setMessage( c => linkedlnCountBar.messaging)
  //     // setJob( c => linkedlnCountBar.jobs)
  //     // setNotification( c => linkedlnCountBar.notifications)
  //     setLinkedln(c => c = linkedlnCountBar);

  //   })
  // }, []);

  // console.log(linkedlnCount);

  return (
    <>
      <div className="flex justify-between items-center">
      <button>Home</button>

      <button>
        My Network ({linkedlnCount.network >=100 ? '99+' : linkedlnCount.network})
      </button>
      <button>
        Jobs ({linkedlnCount.jobs >=100 ? '99+' : linkedlnCount.jobs})
      </button>
      <button onClick={() => {setLinkedln( (c) => ({
          ...c,
          messaging : c.messaging + 1
          })
        )}}>
        Messaging ({linkedlnCount.messaging >=100 ? '99+' : linkedlnCount.messaging})
      </button>
      <button>
        Notification ({linkedlnCount.notifications >=100 ? '99+' : linkedlnCount.notifications})
      </button>

      <ButtonCount />

    </div>
    </>
    
  )
}


const ButtonCount = () => {

  const totalCount =  useRecoilValue(totalLinkedlnSelector);
  return (
    <>
      <button>Me ({totalCount > 100 ? '99+' : totalCount})</button>
    </>
  )
}

export default App
