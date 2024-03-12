/* eslint-disable react/jsx-no-target-blank */


export default function RoadMap() {
  return (
    <section
      className="lg:max-w-[75%] lg:mx-auto max-w-full px-[8%] w-full h-screen font-display bg-[#f0f0f0] rounded-t-[60px] mt-[-60px] pt-10"
      id="Contato"
    >
      <img src="/Line.svg" className="relative mx-auto mt-[-30px] z-20 "/>
      <img id="Rectangle" src="/Rectangle-cnt.svg" className='relative mx-auto mt-[-22px] z-10 w-[160px]' />

      <div className="pt-36">
        <div className="flex justify-between">
          <form action="https://api.web3forms.com/submit" method="POST" className="">
    <div className="flex flex-row">
      <h2 className="text-5xl font-clashSemi">Entre em contato!</h2>
      <hr />
    </div>
    <input type="hidden" name="access_key" value="7548a38d-4868-4731-910a-ebac5fb75fb8"></input>
    <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
    <input type="text" name="name" placeholder="Seu Nome" className="flex w-[300px] items-center justify-between rounded border-2 bg-primary-50 my-5 p-2 transition  hover:duration-100 hover:ease-in  lg:hover:shadow-md text-xl" required/>

    <input type="email" name="email" placeholder="Seu Email" className="flex w-[300px] items-center justify-between rounded border-2 bg-primary-50 my-5 p-2 transition  hover:duration-100 hover:ease-in  lg:hover:shadow-md text-xl" required/>

    <textarea name="mensage" placeholder="Sua Mesagem" className="flex w-[300px] items-center h-96 justify-between rounded border-2 bg-primary-50 p-2 transition  hover:duration-100 hover:ease-in  lg:hover:shadow-md text-xl" required></textarea>

    <button type="submit" className="flex w-[190px] font-display text-2xl items-center justify-center rounded border-2 bg-primary-50 my-5 py-2 transition hover:bg-secondary-300 hover:shadow-md hover:duration-100 hover:ease-in ">Enviar <img src="" alt="" /></button>
          </form>
          <div className="flex ">
          <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
