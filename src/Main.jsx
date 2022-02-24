function Main() {
  return (
    <div>
      <HeaderNavigation />
      <Hero />
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

function HeaderNavigation() {
  return (
    <div class="bg-blue-200 text-gray-600">
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
  return <div></div>;
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
