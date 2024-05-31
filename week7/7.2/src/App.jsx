import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalCountSelector } from './atoms'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'



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

  const newtorkCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  const setMessageCount = useSetRecoilState(messagingAtom);


  return (
    <>
      <div className="flex justify-between items-center">
      <button>Home</button>

      <button>
        My Network ({newtorkCount >=100 ? '99+' : newtorkCount.toString()})
      </button>
      <button>
        Jobs ({jobCount >=100 ? '99+' : jobCount.toString()})
      </button>
      <button onClick={() => {setMessageCount(c => c+1)}}>
        Messaging ({messageCount >=100 ? '99+' : messageCount.toString()})
      </button>
      <button>
        Notification ({notificationCount >=100 ? '99+' : notificationCount.toString()})
      </button>

      <ButtonCount />

    </div>
    </>
    
  )
}


const ButtonCount = () => {

  const totalCount =  useRecoilValue(totalCountSelector);
  return (
    <>
      <button>Me ({totalCount > 100 ? '99+' : totalCount})</button>
    </>
  )
}

export default App
