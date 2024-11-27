


export default function Home() {
  return (                                                                  // flex-wrap: flex items wrap onto multiple lines when there is insufficient space in the flex container. By default, flex items are laid out in a single line, but flex-wrap allows the items to wrap and create new lines when needed.

    <div className="h-screen p-10 md:p-16 flex flex-col md:flex-row justify-center md:items-center md:flex-wrap gap-8 font-serif text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">

      <div className="bg-blue-400 h-52 md:h-72 lg:h-80 xl:h-96 border-4 border-double border-blue-600 md:w-full md:flex-grow lg:flex-1 ">Flex Grow</div>
      <div className="bg-green-400 h-52 md:h-72 lg:h-80 xl:h-96 border-4 border-double border-green-600 md:flex-grow lg:flex-1 ">Flex-1</div>
      <div className="bg-red-400 h-52 md:h-72 lg:h-80 xl:h-96 border-4 border-double border-red-600 md:flex-grow lg:flex-1">Flex-1</div>
    </div>


  );
}
