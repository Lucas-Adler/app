/* eslint-disable react/jsx-no-target-blank */


export default function RoadMap() {
  return (
    <section
      className="flex items-center justify-between lg:max-w-7xl lg:mx-auto max-w-full px-[8%] flex-wrap w-full lg:py-36 py-[20%] h-screen font-display"
      id="Contato"
    >
      <div className="flex flex-col items-start self-center max-w-sm">
        <h1 className="text-m font-semibold">Contato</h1>
        <p className="">Lucas Adler</p>
        <p>
          Email:{' '}
          <a
            href="mailto:"
            target="_blank"
            className="hover:text-secondary-500 text-primary-500 font-semibold"
          >
            procheira.lucas@gmail.com
          </a>
        </p>
        <p>
          Tel:{' '}
          <a
            href="https://wa.me/5547984036395"
            target="_blank"
            className="hover:text-secondary-500 text-primary-500 font-semibold"
          >
            (47) 9 8403 6395
          </a>
        </p>
      </div>
    </section>
  )
}
