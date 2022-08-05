import { DataFilterComponent } from './DataFilterComponent';
import { NavBarApp } from '../../navbar/NavBarApp';
import { CardData } from './CardData';
import { PaginatorData } from '../../paginator_data/PaginatorData';
import { useEffect } from 'react';
import { VacantService } from '../../../services/VacantService';
import { useStoreSession } from '../../../storage/LoginZustand';
import { useStoreHomeCandidates } from '../../../storage/HomeCandidateZustand';


export const DataViewHome = () => {
  let vacantServive = new VacantService()
  const {vacants, setVacants} = useStoreHomeCandidates()
  const {token} = useStoreSession()

  useEffect(()=>{
    vacantServive.GetGeneralVacants(token)
      .then((res) => res.json())
      .then((data) => {
        setVacants(data)
        console.log(data)
      })
      .catch((error)=>{
        console.log(error)
      })
  },[])

  return(
    <>
      <div className='h-max'>
        <NavBarApp/>

        <div className="flex justify-content-center flex-wrap card-container mt-5">
          <DataFilterComponent/>
        </div>

        <div className="flex justify-content-center flex-wrap card-container pl-8 pr-8 pt-6 pb-4">
          <div className="grid container">
            {vacants.map((obj,index)=>{
              return(
                <div className="col-12 md:col-4 lg:col-4" key={index}>
                  <CardData obj={obj}/>
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