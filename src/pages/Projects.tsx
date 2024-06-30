function Projects() {
  return (
    <div className="page bg-white text-black dark:bg-black dark:text-white">
      <section className="w-full max-w-screen-2xl px-4 sm:px-8 mx-auto sm:py-16">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <img src="./img/project_1.png" className="md:w-2/5" />
          <div className="">
            <h2 className="text-[30px] sm:text-[48px] leading-[1.5]">Eema’s Kitchen</h2>
            <p className="mt-4 md:mt-12 text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">
              Help us on our mission to improve the lives of those in Fannin County Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque audantium, totam rem aperiam, eaque ipsa quae b illo inventore veritatis et quasi architecto
            </p>
            <p className="mt-4 md:mt-12 text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">
              Help us on our mission to improve the lives of those in Fannin County Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-screen-2xl px-4 sm:px-8 mx-auto  mt-12 sm:mt-0 sm:py-16">
        <h2 className="text-[30px] sm:text-[48px] leading-[1.5]">
          Why Is This Charity Needed?
        </h2>
        <p className="mt-4 sm:mt-12 text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">
          t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
      </section>

      <section className="w-full max-w-screen-2xl px-4 sm:px-8 mx-auto mt-12 sm:mt-0 sm:pt-32 sm:pb-16">
        <h2 className="text-[30px] sm:text-[48px] leading-[1.5]">
          How You Can Help
        </h2>
        <div className="mt-4 sm:mt-12 flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="">
            <p className="mt-4 sm:mt-12 text-base sm:text-[20px] leading-[1.5] font-['Roboto-thin'] dark:text-[#909090]">
              t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
          </div>
          <img src="./img/project_how_help.png" className="sm:w-2/5" />
        </div>
      </section>

      <section className="w-full max-w-screen-2xl sm:px-8 mx-auto mt-12 sm:mt-0 sm:pt-32 pb-12 sm:pb-16">
        <img src="./img/young_girl.png" className="sm:w-1/2" />
      </section>
    </div>
  );
}

export default Projects;
