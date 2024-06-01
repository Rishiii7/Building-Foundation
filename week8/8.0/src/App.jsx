import './App.css'

function App() {

  return (
    <>
      <Test1 />
      <br></br>
      <Test2 />
      <br></br>
      <Test3 />
    </>
  )
}




const Test3 = () => {
  // Grids with Uneauql Widths Columns
  return (
    <div class="grid grid-cols-12 ">
      <div className='bg-lime-400 rounded-lg col-span-5 '>
        01
      </div>
      <div className='bg-cyan-500 rounded-lg col-span-5'>
        02
      </div>
      <div className='bg-violet-500 rounded-lg col-span-2'>
        03
      </div>
    </div>
  )
}


const Test2 = () => {
  // Grids with Equal Widths Columns
  return (
    <div class="grid grid-cols-3 ">
      <div className='bg-lime-400 rounded-lg '>
        01
      </div>
      <div className='bg-cyan-500 rounded-lg '>
        02
      </div>
      <div className='bg-violet-500 rounded-lg '>
        03
      </div>
    </div>
  )
}

const Test1 = () => {
  // Flex display
  return (
    <div class="flex justify-between">
      <div className='flex-none w-14 h-14 bg-lime-400 rounded-lg text-center pt-4'>
        01
      </div>
      <div className='flex-initial w-64 ... bg-cyan-500 rounded-lg pt-4'>
        02
      </div>
      <div className='flex-initial w-32 ... bg-violet-500 rounded-lg pt-4'>
        03
      </div>
    </div>
  )
}


export default App
