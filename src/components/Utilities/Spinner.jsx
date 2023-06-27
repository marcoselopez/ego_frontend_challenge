import { usePromiseTracker } from 'react-promise-tracker'
import { Oval } from 'react-loader-spinner';

const Spinner = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <>
        <div style={{
          zIndex: 10001, display: 'flex', justifyContent: 'center', position: 'fixed', alignItems: 'center',
          width: '100%', height: '100vh', backgroundColor: 'rgba(0,0,0,0.2)'
        }}>
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      </>
    )  
  )
};

export default Spinner;