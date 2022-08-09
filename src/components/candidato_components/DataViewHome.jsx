import { DataFilterComponent } from './DataFilterComponent';
import { NavBarApp } from '../navbar/NavBarApp';
import { CardData } from './CardData';
import { PaginatorData } from '../paginator_data/PaginatorData';


export const DataViewHome = () => {

  return(
    <>
      <div className='h-max' style={{background:'#EAF3FB'}}>
        <NavBarApp/>

        <div className="flex justify-content-center flex-wrap card-container mt-5">
          <DataFilterComponent/>
        </div>

        <div className="flex justify-content-center flex-wrap card-container pl-8 pr-8 pt-6 pb-4">
          <div className="grid container">
            {[...Array(6).keys()].map(e=>{
              return(
                <div className="col-12 md:col-4 lg:col-4">
                  <CardData/>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex justify-content-center flex-wrap card-container pb-6">
          <PaginatorData/>
        </div>
      </div>
    </>
  )
}