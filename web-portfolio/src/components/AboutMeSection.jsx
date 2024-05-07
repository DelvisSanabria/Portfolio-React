export function AboutMeSection() {
  return (
    <>
      <section className='bg-[#f5f5f5]'>
        <div className="flex justify-center m-4">
          <h2 className="font-semibold text-[#101736] tracking-wider">Who is delvis as a developer?</h2>
        </div>
        <div>
          <div>
            <ul className="grid grid-rows-2 p-4">
              <li>
                <div className="grid place-content-center rounded-xl bg-[#f5f5f5] shadow-lg p-4 my-4">
                  <span>Frontend developer</span>
                  <p>As a Frontend developer I specialize in javascript and its reactJs framework, using additional technologies such as typescript and framework such as tailwind css and NextJs</p>
                </div>
              </li>
              <li>
                <div className="grid place-content-center rounded-xl bg-[#f5f5f5] shadow-lg p-4 my-4">
                  <span>Backend developer</span>
                  <p>As a Backend developer I specialize in javascript with NodeJS and its Express framework, although I use Python with its Flask framework and java with its springboot framework</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )

}