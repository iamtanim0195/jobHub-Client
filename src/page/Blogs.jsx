
const Blogs = () => {
  return (
    <div><>
      <div className="flex justify-between items-center px-4 w-auto h-14 bg-purple-900 text-white font-semibold">
        <div className="bg-white w-9 h-9 rounded-full" />
        <ul className="list-none flex justify-between items-center">
          <a href="#" className="mr-5 hover:text-gray-300">
            <li className="list-none">Menu</li>
          </a>
          <a href="#" className="mr-5 hover:text-gray-300">
            <li className="list-none">Services</li>
          </a>
          <a href="#" className="mr-5 hover:text-gray-300">
            <li className="list-none">About Us</li>
          </a>
          <a
            href="#"
            className="bg-indigo-500 hover:text-indigo-500 hover:bg-white py-1 px-3"
          >
            <li className="list-none">Sign In</li>
          </a>
        </ul>
      </div>
      <div className="flex flex-col p-5 lg:px-48 lg:py-11">
        <div className="bg-gray-100 p-5 mb-10">
          <h1 className="font-bold text-2xl mb-2">What is an access token and refresh token? How do they work and where should we
            store them on the client-side?
          </h1>
          <p className="my-3">
            Access tokens and refresh tokens are used in authentication and authorization systems, typically in the context of OAuth 2.0 or similar authentication protocols. They serve different purposes in managing secure access to resources. Here's an overview of what access tokens and refresh tokens are, how they work, and where they should be stored on the client-side:
          </p>
          <p><span className="text-3xl">Access Token:</span>

            Used for authentication and accessing resources.
            Short-lived, typically minutes to hours.
            Stored on the client-side, often in memory or a cookie.
            <br />
            <span className="text-3xl"> Refresh Token:</span>

            Used to get new access tokens without re-authenticating.
            Long-lived, lasting days to months.
            Stored securely on the client-side, e.g., in secure cookies or device storage.
            Always prioritize the security of refresh tokens due to their sensitivity.

          </p>
        </div>
        <div className="bg-gray-100 p-5 mb-10">
          <h1 className="font-bold text-2xl mb-2">What is express js? What is Nest JS (google it)?</h1>
          <p className="my-3">
          <span className="text-3xl">Express.js:</span> A minimal and flexible Node.js web application framework, widely used for building web applications and APIs.
          <br />
          <span className="text-3xl">NestJS:</span> A progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It follows TypeScript and incorporates ideas from both Angular and Express to provide a solid architecture for applications.
          </p>
        </div>
        <div className="bg-gray-100 p-5 mb-10">
          <h1 className="font-bold text-2xl mb-2">- Explain your code.
</h1>
          <p className="my-3">
            this is a job  Job Seeking website. i use tailwind css react js and node js. 
          </p>
        </div>
      </div>
    </>
    </div>
  )
}

export default Blogs;