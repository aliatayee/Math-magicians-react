import React from 'react';

const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet erat sem. Mauris venenatis tincidunt ex sed venenatis. Aliquam varius purus vitae tellus finibus efficitur. Suspendisse potenti. Cras vitae libero sapien. Sed fringilla vulputate mi eget tempus. Donec finibus elit magna, nec dapibus mauris interdum eget. Morbi volutpat a felis a fermentum. Aliquam ut neque vel ex tristique lobortis. Pellentesque gravida risus tortor, non condimentum mi egestas eget. Donec quis tellus nec erat porttitor semper at rutrum orci. Maecenas vestibulum ex sed mollis posuere.Cras laoreet tempor velit, ac varius mauris aliquam vel. Curabitur ut cursus tortor. Aliquam nec velit mi. Sed malesuada a elit non dignissim. Curabitur nulla ex, lacinia ut ipsum convallis, posuere efficitur velit. Vestibulum rutrum nulla odio, non sagittis magna porta at. Pellentesque et tincidunt diam. Donec maximus mauris a volutpat fringilla. Nullam facilisis lacus sed nulla auctor, sit amet ultrices nibh pellentesque. Aenean ultricies est enim, vitae aliquet nunc tincidunt non. Aenean ante erat, eleifend eget eros et, dignissim laoreet erat. Nunc ultrices condimentum ex aliquam ultricies. Sed ut dui felis.';
const Home = () => (

  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between text-white">
    <div className="border border-slate-600 rounded-md p-5 ">
      <h1 className="text-3xl font-bold mt-2">Welcome to our page!</h1>
      <p className="mt-5">
        {desc}
      </p>
    </div>
  </div>
);
export default Home;
