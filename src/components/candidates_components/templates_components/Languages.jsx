export const Languages = ({ resume,color }) => {
  return (
    <>
      <div className=" px-5 m-0 md:m-5">
        <div class="card ">
          <div class="flex flex-wrap align-items-center mt-3 justify-content-center card-container blue-container">
            <div class={`min-w-full border-round ${color}  text-white font-bold p-1 flex align-items-center text-left`}>Idiomas:</div>
          </div>
          <div className="grid container ">
            {resume.languages.map((r, i) => {
              return (
                <div className="col-12 ">
                  <div className="text-base text-justify mt-2 font-bold  md:ml-3 lg:ml-3 md:mr-3 lg:mr-3 ">• {r.language.language} </div>
                  <div className="text-base text-justify  font-light text-600 md:ml-3 lg:ml-3 md:mr-3 lg:mr-3"> {r.level}</div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </>
  )
}