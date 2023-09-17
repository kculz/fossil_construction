
const Request = () => {
    return (
      <>
          <div className="bg-white md:px-32 px-10 w-screen">
              <div className="flex justify-center items-center  w-full py-56">
                  <form className="shadow rounded bg-white flex flex-col gap-3 p-3 lg:w-2/3 w-full">
                      <h1 className="md:text-3xl text-xl text-green-600 text-center capitalize">request for quotation</h1>
                      <input type="text" name="fullname" id="fullname" placeholder="Enter your fullname" className="bg-transparent border border-green-600 rounded outline-none py-3 px-2 md:text-lg text-base text-green-600" required />
                      <input type="email" name="email" id="email" placeholder="Enter your email address" className="bg-transparent border border-green-600 rounded outline-none py-3 px-2 md:text-lg text-base text-green-600" required />
                      <input type="text" name="subject" id="subject" placeholder="Enter request subject" className="bg-transparent border border-green-600 rounded outline-none py-3 px-2 md:text-lg text-base text-green-600" required />
                      <textarea name="message" id="message" cols="30" rows="5" className="bg-transparent border border-green-600 rounded outline-none py-3 px-2 md:text-lg text-base text-green-600" required placeholder="Message"></textarea>
                      <input type="submit" value="Sent request" className="bg-green-600 py-3 rounded text-lg text-white" />
                  </form>
              </div>
          </div>
      </>
    )
  }
  
  export default Request;