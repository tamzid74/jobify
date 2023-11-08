const Blogs = () => {
  return (
    <div className="w-full max-w-[1250px] px-[25px] mx-auto mt-20 mb-20">
      <div>
        <h1 className="text-4xl font-roboto text-primary font-semibold mb-4">
          What is access token and refresh token? How do they work and where
          should we store them on the client-side?
          <br />
          <span className="text-sm text-[#696969]">by feldua</span>
        </h1>
        <div className="divider"></div>

        <div className="border p-4 rounded shadow">
          <h2 className="text-lg font-roboto font-semibold mb-2">
            {" "}
            Access Token:
          </h2>
          <ul className="text-gray-600 list-decimal ml-5 space-y-3">
            <li>
              <span className="font-bold font-roboto">Purpose:</span> An access
              token is a credential that represents the users permission to
              access a resource or perform a specific action on behalf of the
              user.
            </li>
            <li>
              <span className="font-bold font-roboto">How It Works:</span> When
              a user logs in or authenticates with a web application, they
              receive an access token as a result of a successful authentication
              process. This token is typically short-lived and grants limited
              access.
            </li>
            <li>
              <span className="font-bold font-roboto">Usage:</span>Access tokens
              are sent with each API request to prove that the user has the
              necessary permissions to access the requested resource. They are
              usually included in the HTTP headers of requests.
            </li>
            <li>
              <span className="font-bold font-roboto">Lifetime:</span> Access
              tokens have a short lifespan, often measured in minutes or hours.
              After this period, they become invalid.
            </li>
          </ul>
          <h2 className="text-lg font-roboto font-semibold mt-5 mb-2">
            Refresh Token:
          </h2>
          <ul className="text-gray-600 list-decimal ml-5 space-y-3">
            <li>
              <span className="font-bold font-roboto">Purpose:</span> A refresh
              token is a long-lived credential that can be used to obtain a new
              access token once the current access token expires.
            </li>
            <li>
              <span className="font-bold font-roboto">How It Works:</span> When
              a user receives an access token, they also get a corresponding
              refresh token. If the access token expires, the user can use the
              refresh token to request a new access token without having to
              re-authenticate.
            </li>
            <li>
              <span className="font-bold font-roboto">Usage:</span>Refresh
              tokens are not sent with API requests like access tokens. They are
              securely stored on the client-side and exchanged for a new access
              token on the server.
            </li>
            <li>
              <span className="font-bold font-roboto">Lifetime:</span> Refresh
              tokens have a longer lifespan compared to access tokens. They can
              last for days, weeks, or even months.
            </li>
          </ul>
          <h2 className="text-lg font-roboto font-semibold mt-5 mb-2">
            Where to Store Tokens on the Client-Side:
          </h2>
          <ul className="text-gray-600 list-decimal ml-5 space-y-3">
            <span className="font-bold font-roboto">Access Tokens: </span> These
            are short-lived and sensitive, so they should be stored securely but
            readily accessible by your application code. Common places to store
            access tokens on the client-side include:
            <ol className="list-disc text-sm">
              <li>
                <span className="font-bold  font-roboto">Memory: </span>
                Use HTTP-only cookies to store access tokens securely,
                preventing JavaScript access.
              </li>
              <li>
                <span className="font-bold font-roboto">Cookies: </span>You can
                store them in memory variables during the users session.
              </li>
              <li>
                <span className="font-bold font-roboto">Local Storage: </span>
                YStore tokens in the browsers local storage. However, this
                method is less secure and susceptible to cross-site scripting
                (XSS) attacks.
              </li>
            </ol>
          </ul>
          <ul className="text-gray-600 list-decimal mt-5 ml-5 space-y-3">
            <span className="font-bold font-roboto">Refresh Tokens:</span>ese
            are long-lived and highly sensitive. They should be stored securely
            and never exposed to JavaScript. Common places to store refresh
            tokens on the client-side include:
            <ol className="list-disc text-sm">
              <li>
                <span className="font-bold  font-roboto">
                  HTTP-only Cookies:{" "}
                </span>
                Use cookies for secure storage of refresh tokens, making them
                inaccessible to JavaScript.
              </li>
              <li>
                <span className="font-bold font-roboto">Server-Side:</span>YSome
                applications may choose to keep refresh tokens on the
                server-side, requiring the client to request new access tokens
                through an API endpoint when needed. This adds an extra layer of
                security.
              </li>
              <li>
                <span className="font-bold font-roboto">Local Storage: </span>
                YStore tokens in the browsers local storage. However, this
                method is less secure and susceptible to cross-site scripting
                (XSS) attacks.
              </li>
            </ol>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-4xl font-roboto text-primary font-semibold mb-4">
          What is express js? What is Nest JS?
          <br />
          <span className="text-sm text-[#696969]">by Ajmir</span>
        </h1>

        <h2 className="text-lg font-roboto font-semibold mt-5 mb-2">
          Express.js:
        </h2>
        <p>
          Express.js is a minimal and flexible Node.js web application framework
          that simplifies the process of building web applications and APIs. It
          provides a set of features for web and mobile application development,
          making it easier to handle routes, requests, and responses. Express.js
          is unopinionated, allowing developers to choose the tools and
          libraries they prefer, making it a popular choice for building web
          servers and RESTful APIs in Node.js.
        </p>
        <h2 className="text-lg font-roboto font-semibold mt-5 mb-2">
          Nest.js:
        </h2>
        <p>
          Nest.js is a progressive Node.js framework for building efficient,
          reliable, and scalable server-side applications. It uses TypeScript
          and is built on top of Express.js, providing a higher level of
          abstraction and structure to application development. Nest.js embraces
          the concept of modular and reusable code, making it well-suited for
          large-scale projects. It promotes good software engineering practices
          and integrates with a wide range of libraries and tools, offering a
          strong foundation for building both RESTful APIs and full-stack
          applications.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
