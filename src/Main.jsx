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
      <div class="absolute top-0 left-0 translate-x-4 translate-y-4 transform">
        <div class="absolute h-64 w-64 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 opacity-50"></div>
        <div class="absolute ml-10 mt-10 h-64 w-64 rounded-full bg-gradient-to-br from-red-100 to-red-200 opacity-50"></div>
        <div class="absolute ml-24 h-64 w-64 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 opacity-50"></div>
      </div>

      {/* righr circle decoration */}
      <div class="absolute top-0 right-0 mr-48 hidden -translate-x-64 translate-y-64 transform overflow-visible lg:block">
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
            class="hidden rounded bg-purple-200 p-3 text-purple-600 shadow transition duration-500 hover:bg-purple-400 hover:text-purple-300 hover:shadow-xl lg:inline-block">
            Get the Course
          </a>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div class="relative">
      {/* purple bar to help with the section transtion */}
      <div class="absolute inset-x-0 bottom-0 h-64 bg-purple-700"></div>

      <div class="container relative mx-auto px-6 py-24 text-center lg:px-0">
        {/* heading */}
        <h1 class="mb-4 bg-gradient-to-r from-teal-400 via-teal-600 to-purple-600 bg-clip-text py-2 text-5xl font-extrabold text-transparent lg:text-6xl">
          Beginner Tailwind
        </h1>

        {/* paragraph */}
        <p class="mb-8 text-xl text-gray-700 lg:text-2xl">Make good looking design quickly. All without a single line of custom css.</p>

        {/* big button / call to action */}
        <a
          href="#"
          class="mb-16 inline-block rounded bg-gradient-to-br from-purple-400 to-purple-700 py-3 px-12 text-lg font-bold tracking-wide text-purple-100 shadow-lg transition duration-300 hover:to-purple-600 hover:text-white hover:shadow-2xl lg:mb-32">
          Get the Course
        </a>

        <div class="relative ">
          {/* teaser image */}
          <img src="https://i.imgur.com/wysbBMS.png" alt="Teaser image" class="rounded-lg border-4 border-purple-400 shadow-2xl" />

          {/* teaser image info box */}
          <div class="top-0 right-0 mt-8 rounded border-t-4 border-yellow-500 bg-yellow-100 py-4 px-8 text-left text-yellow-800 shadow-lg lg:absolute lg:mt-0 lg:translate-x-4 lg:-translate-y-4 lg:transform">
            <p>
              <strong class="font-bold">We'll create Beginner tailwind.com.</strong>
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
  return (
    <div class="relative bg-purple-700 pb-24 lg:pt-12">
      {/* gray bar to help section transition */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gray-300 lg:h-64"></div>

      <div className="container relative mx-auto px-6 lg:px-0">
        <h2 class="mb-10 text-4xl font-bold text-purple-100 lg:text-6xl">Writing CSS is tough stuff!</h2>
        <div class="space-y-8 lg:flex lg:space-x-16 lg:space-y-0">
          {/* left column */}
          <div class="space-y-8 rounded bg-white p-12 text-lg leading-relaxed text-gray-800 shadow-2xl lg:w-2/3 lg:p-16">
            <p>
              Tailwind makes writing CSS easier and lets us customize our designs faster than any other CSS framework. If you want a CSS
              framework that has pre-built components, then Tailwind may not be for you. If you want a CSS framework that lets you design
              quickly and customize your site, then
              <strong class="font-bold text-teal-500">Tailwind is gonna be a lot of fun</strong>.
            </p>
            <p>
              After using Bulma to build{" "}
              <a href="https://scotch.io" class="text-blue-500 hover:underline">
                Scotch.io
              </a>
              , my CSS files became littered with my own{" "}
              <code class="inline-block rounded bg-gray-200 px-1 font-mono text-xs text-red-700">!important</code> classes to override the
              framework's styles. Tailwind doesn't have the
              <code class="inline-block rounded bg-gray-200 px-1 font-mono text-xs text-red-700">!important</code> problem since all our
              elements are designed on the fly.
            </p>
            <p>
              <strong>Important Note</strong>: Tailwind lets us design quickly, but this doesn't mean that you don't need CSS knowledge
              however. To use Tailwind, you need to have a good understanding of CSS properties. In this course, we will learn Tailwind and
              we'll also learn CSS conceptsto create good looking designs. <strong>Tailwind is the ultimate CSS shorthand</strong>, but we
              still need to learn the CSS, which we'll do in this course.
            </p>
            <p class="relative text-3xl italic">
              <span class="absolute -top-4 -left-6 text-7xl text-purple-700 opacity-60">"</span>This isn't just a Tailwind course. This is
              also a "learn how to design with CSS" course.
            </p>
            <p>
              The hardest things about learning Tailwind is memorizing the classes and also knowing which classes go well together. We'll be
              writing a lot of Tailwind in this course so that the repetition will help us commit Tailwind classes to memory.
            </p>
          </div>

          {/* right column */}
          <div class="flex-grow space-y-4 text-lg italic">
            <div class="rounded-lg bg-purple-800 p-10 text-purple-200">What classes should I use?</div>
            <div class="rounded-lg bg-purple-800 p-10 text-purple-200">How do I make things look good?</div>
            <div class="rounded-lg bg-purple-800 p-10 text-purple-200">My design looks basic?</div>
            <div class="rounded-lg bg-purple-800 p-10 text-purple-200">How do I do responsive?</div>
            <div class="rounded-lg bg-purple-800 p-10 text-purple-200">Why does my typography look so bad?</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div class="bg-gray-300 lg:pt-12 pb-24 lg:text-center">
      <div class="container mx-auto px-6 lg:px-0">
        <h2 class="mb-3 text-3xl lg:text-6xl font-bold text-teal-900">Some Tailwind Videos I've Done</h2>
        <p class="mb-12 lg:text-xl leading-loose">
          Hey there! My name is{" "}
          <a href="#" class="text-blue-500 hover:underline">
            Chris Sev
          </a>{" "}
          and I founded a web dev tutorial site Scotch.io. We were able to grow to 4M monthly pageviews and $300,000 yearly revenue.
          Scotch.io was acquired byDigitalOcean in November 2019. Nowadays I'm in search of the best ways to develop and design a business.
          Hope you enjoy this course and my other one MakeReactApps.com.
        </p>

        <div class="mt-8 lg:flex space-y-8 lg:space-y-0 lg:space-x-8 text-left">
          <div class="lg:w-1/2 rounded border-2 border-gray-700 bg-white">
            <p class="text-lg h-45 p-8 text-gray-700">
              I have a Getting started with Tailwind article on scotch.io and a 15 minute starter YouTube video.
            </p>
            <iframe
              class="w-full rounded-b"
              height="315"
              src="https://www.youtube.com/embed/6zIuAyLZPH0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
          <div class="lg:w-1/2 rounded border-2 border-gray-700 bg-white">
            <p class="text-lg p-8 text-gray-700 ">I did a Build Your 1st Tailwind Site for Traversy Media on YouTube also.</p>
            <iframe
              class="w-full rounded-b"
              height="315"
              src="https://www.youtube.com/embed/NRagrTU_v8o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
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
