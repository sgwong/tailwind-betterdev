function Main() {
  return (
    <div>
      <div class="bg-gradient-to-br from-white to-gray-300">
        <CircileDecoration />
        <HeaderNavigation />
        <Hero />
      </div>
      <Overview />
      <AboutMe />
      <WhatYouWillLearn />
      <WhatYouWillBuild />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

function CircileDecoration() {
  return (
    <div>
      {/* left circle decoration */}
      <div class="absolute top-0 left-0">
        <div class="absolute h-64 w-64 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 opacity-50"></div>
        <div class="absolute ml-10 mt-10 h-64 w-64 rounded-full bg-gradient-to-br from-red-100 to-red-200 opacity-50"></div>
        <div class="absolute ml-24 h-64 w-64 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 opacity-50"></div>
      </div>

      {/* righr circle decoration */}
      <div class="absolute top-0 right-0 mr-48 overflow-visible transform -translate-x-64 translate-y-64">
        <div class="absolute h-64 w-64 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 opacity-50"></div>
        <div class="absolute ml-10 mt-10 h-64 w-64 rounded-full bg-gradient-to-br from-red-100 to-red-200 opacity-50"></div>
        <div class="absolute ml-24 h-64 w-64 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 opacity-50"></div>
      </div>
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div class="relative text-gray-600">
      <div class="container mx-auto flex justify-between px-6 py-6 lg:px-0">
        {/* left header section */}
        <div class="flex items-center space-x-4">
          <a href="#" class="text-2xl font-bold text-teal-800">
            Beginner Tailwind
          </a>
          <a href="#" class="hidden hover:text-gray-900 lg:inline-block">
            About
          </a>
          <a href="#" class="hidden hover:text-gray-900 lg:inline-block">
            Waht You'll Learn
          </a>
          <a href="#" class="hidden hover:text-gray-900 lg:inline-block">
            Pricing
          </a>
          <a href="#" class="hidden hover:text-gray-900 lg:inline-block">
            FAQ
          </a>
        </div>

        {/* right header section */}
        <div class="flex items-center space-x-4">
          <a href="#" class="hover:text-gray-900">
            Login
          </a>
          <a
            href="#"
            class="hidden rounded bg-purple-200 p-3 text-purple-600 shadow transition duration-500 hover:bg-purple-400 hover:text-purple-300 hover:shadow-xl lg:inline-block"
          >
            Get the Course
          </a>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div>
      <div class="container relative mx-auto px-6 py-24 text-center lg:px-0">
        {/* heading */}
        <h1 class="mb-4 bg-gradient-to-r from-teal-400 via-teal-600 to-purple-600 bg-clip-text py-2 text-6xl font-extrabold text-transparent">
          Beginner Tailwind
        </h1>

        {/* paragraph */}
        <p class="mb-8 text-2xl text-gray-700">
          Make good looking design quickly. All without a single line of custom
          css.
        </p>

        {/* big button / call to action */}
        <a
          href="#"
          class="mb-32 inline-block rounded bg-gradient-to-br from-purple-400 to-purple-700 py-3 px-12 text-lg font-bold tracking-wide text-purple-100 shadow-lg transition duration-300 hover:to-purple-600 hover:text-white hover:shadow-2xl"
        >
          Get the Course
        </a>

        <div class="relative ">
          {/* teaser image */}
          <img
            src="https://i.imgur.com/wysbBMS.png"
            alt="Teaser image"
            class="rounded-lg border-4 border-purple-400 shadow-2xl"
          />

          {/* teaser image info box */}
          <div class="absolute top-0 right-0 translate-x-4 -translate-y-4 transform rounded border-t-4 border-yellow-500 bg-yellow-100 py-4 px-8 text-left text-yellow-800 shadow-lg">
            <p>
              <strong class="font-bold">
                We'll create Beginner tailwind.com.
              </strong>
              <span class="opacity-50">(it's the site you're on now)</span>
            </p>
            <p>We'll do it all wihtout a single line of custom CSS!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Overview() {
  return <div></div>;
}

function AboutMe() {
  return <div></div>;
}

function WhatYouWillLearn() {
  return <div></div>;
}

function WhatYouWillBuild() {
  return <div></div>;
}

function Pricing() {
  return <div></div>;
}

function FAQ() {
  return <div></div>;
}

function Footer() {
  return <div></div>;
}

export default Main;
