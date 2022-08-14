
import { NavBarApp } from '../navbar/NavBarApp';
import { CVCardData } from './CvCardData';


export const DataViewHomeCv = () => {

  return(
    <>
      <div className='h-max' style={{background:'#EAF3FB'}}>
        <NavBarApp/>

   

        <div className="flex justify-content-center flex-wrap card-container pl-8 pr-8 pt-6 pb-4">
          <div className="grid container">
            {[...Array(3).keys()].map(e=>{
              return(
                <div className="col-12 md:col-4 lg:col-4">
                  <CVCardData/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}