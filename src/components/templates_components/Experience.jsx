export const Experience = () => {
  return (
    <>
         <div className=" px-5 m-0 md:m-5">
                <div class="card ">
                    <div class="flex flex-wrap align-items-center mt-3 justify-content-center card-container blue-container">
                        <div class="min-w-full border-round bg-blue-900  text-white font-bold p-1 flex align-items-center text-left">Experiencia:</div>
                    </div>
                    <div class="min-w-full text-justify border-round  font-bold mt-2 flex align-items-center text-left md:ml-3 lg:ml-3 md:mr-3 lg:mr-3">ADMINISTRACIÓN DEL TIEMPO</div>
                    <div className="grid container ">
                        <div className="col-4 md:col-4 lg:col-4">
                            <div className="text-base font-bold mt-2 flex justify-content-center">Puesto</div>
                            <div className="text-base font-light text-600 flex justify-content-center">Gerente</div>
                        </div>
                        <div className="col-4 md:col-4 lg:col-4 justify-content-center">
                            <div className="text-base font-bold mt-2 flex justify-content-center">Inicio</div>
                            <div className="text-base font-light text-600 flex justify-content-center">2020/06/01</div>
                        </div>
                        <div className="col-4 md:col-4 lg:col-4">
                            <div className="text-base font-bold mt-2 flex justify-content-center">Fin</div>
                            <div className="text-base font-light text-600 flex justify-content-center">2020/07/01</div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}