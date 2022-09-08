import './index.scss'
import homegrown from '../../assets/images/homgrown_screenshot.png'
import mtg from '../../assets/images/mtg.png'
import teamGen from '../../assets/images/teamGen.png'
import workSch from '../../assets/images/SCREENSHOT2.png'


function Work() {

  
  return (
    <>
    <div className='work-page'>
      <div className='grid'>
        <div className='row1'>
            
        <a href="https://floating-island-17357.herokuapp.com/">
        <img src={homegrown} alt="gardening site screenshot" width="400px"></img>
        </a>

            <a href="https://mtg-hub.herokuapp.com/">
              <img src={mtg} alt="magic the gathering trade hub screenshot" height="260px" width="400px"></img>
        </a>
        </div>

          <div className='row1'>
            <a href="https://3lydaley.github.io/workScheduler/">
              <img src={workSch} alt="workday scheduler screenshot" height="260px" width="400px"></img>
            </a>

            <a href="https://github.com/3lyDaley/TeamProfileGenerator">
              <img src={teamGen} alt="runbuddy homepage screenshot" height="260px" width="400px"></img>
            </a>
          </div>

      </div>
    
        
    </div>
    </>
  )
}

export default Work;