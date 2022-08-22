import { Button } from 'primereact/button';
import { useStoreSession } from '../../../storage/LoginZustand';
export const PerfilCard = ({ resume,color }) => {
  const { token, userSession } = useStoreSession()
  return (
    <>
      <div className="  px-5   m-0 md:m-5">
        <div className="grid ">
          <div className="col-4 mr-4">
            <div className="flex justify-content-center ">
              <img className=" sm:w-10 sm:h-10    shadow-4 border-circle" src={`https://avatars.dicebear.com/api/initials/${userSession.username}.svg`} />
            </div>
            {
              (
                <div className="text-base    font-light text-600 mt-2  md:text-center lg:ml-4 p-5 py-0 m-3">{resume.curricularTitle}</div>
              )
            }
          </div>
          <div >
            {
              (
                <div className="flex justify-content-center text-2xl mt-5 font-bold md:ml-4 lg:ml-4">{resume.profile.name.concat(' ', resume.profile.firstName, ' ', resume.profile.secondName)}</div>)
            }
            <div class="card ">
              <div class={`flex flex-wrap align-items-center mt-3 justify-content-center card-container ${color}`}>
                <div class="min-w-full border-round   text-white font-bold p-1 flex align-items-center justify-content-center"></div>
              </div>
            </div>
            <div className="grid  mt-2">
              <div className="col-4 ">
                <div className="text-base font-bold mt-2 flex justify-content-center">
                  <Button style={{ color: "white" }} icon={<span className="material-icons ">call</span>}
                    className={`p-button-rounded ${color} p-button-plain  `} />
                </div>
                {
                  (
                    <div className="text-sm font-light text-600 flex justify-content-center mt-2 ">{resume.profile.phoneNumber}</div>
                  )
                }

              </div>
              <div className=" col-4">
                <div className="text-base font-bold mt-2 flex justify-content-center"><Button style={{ color: "white" }} icon={<span className="material-icons ">mail</span>}
                  className={`p-button-rounded ${color} p-button-plain`} /></div>
                      <div className="text-sm font-light text-600 flex justify-content-center mt-2 mx-2">{userSession.email}</div>                  
              </div>
              <div className="col-4   ">
                <div className="text-base font-bold mt-2 flex justify-content-center">
                  <Button style={{ color: "white" }} icon={<span className="material-icons ">my_location</span>}
                    className={`p-button-rounded ${color} p-button-plain mr-2 `} /></div>
                {
                  (
                    <div className="text-sm font-light text-600 flex justify-content-center mt-2 ">{resume.profile.state.name}</div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div class="card ">
          <div class="flex flex-wrap align-items-center mt-3 justify-content-center card-container color">
            <div class={`min-w-full border-round ${color}  text-white font-bold p-1 flex align-items-center text-left`}>Resumen:</div>
          </div>

          <div className="grid  mt-2">
            <div className="col-12 ">
              {
                (
                  <div className="text-base text-justify mt-2 font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">
                    {resume.description}
                  </div>)
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}