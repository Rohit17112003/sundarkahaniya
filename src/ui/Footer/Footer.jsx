const Footer=()=> {
  return (
    <footer className="bg-[#000000d8] text-white px-4  md:px-16 pt-8 pb-24 md:pb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold">Popular Languages</h3>
          <ul>
            <li>Hindi</li>
            <li>Marathi</li>
            <li>Bengali</li>
            <li>Malayalam</li>
            <li>Kannada</li>
            <li>Telugu</li>
            <li>Tamil</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Top Genre</h3>
          <ul>
            <li>Romance</li>
            <li>Young Adult</li>
            <li>Suspense</li>
            <li>Drama</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Top Content</h3>
          <ul>
            <li>Also Read</li>
            <li>Most Read</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Famous Authors</h3>
          <ul>
            <li>William Shakespeare</li>
            <li>Arthur Conan Doyle</li>
          </ul>
        </div>
      </div>
    </footer>
    
  );
}
export default Footer;
