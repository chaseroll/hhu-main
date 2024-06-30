import Map from '../components/Map';

function Upcoming() {
  return (
    <div className="page bg-white text-black dark:bg-black dark:text-white">
      <section className="w-full max-w-screen-2xl px-4 sm:px-8 mx-auto sm:py-16">
        <div className="relative flex flex-col sm:flex-row justify-center mt-12">
          <img src="./img/upcoming_1.png" className="w-full max-w-3xl mx-auto" />
          <div className="relative sm:absolute mt-[-30px] sm:mt-0 sm:-bottom-20 w-full max-w-md rounded-2xl py-6 px-12 bg-[#E2E2E2] dark:bg-[#101010]">
            <h2 className="text-center text-[30px] sm:text-[48px] leading-[1.5]">Education for poor children</h2>
          </div>
        </div>
      </section>

      <section className="w-full max-w-screen-2xl px-4 sm:px-8 mx-auto mt-12 sm:mt-0 sm:py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 md:items-center">
          <div className="flex md:items-center gap-8">
            <div className='stroke-black dark:stroke-white'>
              <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.7549 1.24104C30.055 0.628215 32.1755 2.63993 31.5295 4.82206L26.2308 22.7214C25.9422 23.6963 25.1391 24.4582 24.1116 24.732L5.24474 29.759C2.94466 30.3716 0.824205 28.3601 1.47016 26.1779L6.76878 8.27857C7.05738 7.30365 7.86047 6.54174 8.8881 6.26794L27.7549 1.24104Z" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.848 18.9647C14.8649 20.8782 18.1351 20.8782 20.152 18.9647C22.169 17.0512 22.169 13.9488 20.152 12.0353C18.1351 10.1218 14.8649 10.1218 12.848 12.0353C10.831 13.9488 10.831 17.0512 12.848 18.9647Z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">1455 Lickskillet Circle,</p>
              <p className="text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">Epworth, GA, 30541, United States</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div>
              <img src='./img/alarm-clock.png' />
            </div>
            <div>
              <p className="text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">10:00 - 18:00, Thursday</p>
            </div>
          </div>
        </div>
        <p className="mt-8 sm:mt-32 text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">
          t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
        </p>
        <p className="mt-4 sm:mt-8 text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">
          optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
      </section>

      <section className="w-full max-w-screen-2xl px-4 sm:px-8 mx-auto mt-0 sm:mt-0 p-16">
        <Map center={[51.505, -0.09]} zoom={13} />
      </section>
    </div>
  );
}

export default Upcoming;
