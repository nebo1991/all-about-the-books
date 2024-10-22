import errorLogo from "../assets/page-not-found.svg";

const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 my-10">
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-red-500 sm:text-7xl">
          Page not found
        </h1>
        <img src={errorLogo} className="w-[200px]" />

        <p className="mt-4 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="text-purple-900 rounded-md border border-purple-700 border-1 px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-purple-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </a>
          <a
            href="mailto:allaboutbooks@email.com"
            className="text-sm font-semibold text-gray-900"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
