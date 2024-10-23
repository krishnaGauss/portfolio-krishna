import React from "react";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased w-[100vw] h-[200vh]">
      <div className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ab, impedit ad unde illum sequi harum maiores, ex fuga officia, enim quidem porro nam! Fugiat maiores, ducimus nihil nemo ut reprehenderit ratione perferendis expedita vel fuga quos ullam? Maxime eligendi asperiores, aut necessitatibus repellat quia aspernatur accusamus velit officia tempore quod reprehenderit facilis consequatur! Tenetur quod, mollitia quae adipisci ipsam repudiandae ex. Cupiditate ducimus in vel perspiciatis nam doloribus, commodi qui, dolorem porro eaque dicta cum asperiores dignissimos quibusdam praesentium exercitationem possimus est veritatis recusandae sequi sunt voluptate voluptatibus quisquam? Modi hic illum omnis. Possimus repudiandae consectetur fuga laboriosam dolor!</div>
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
