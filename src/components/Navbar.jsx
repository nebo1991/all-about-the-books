import navBarLogo from '../assets/book-logo.svg'

const Navbar = () => {
    return(
        <>
        <div className="flex justify-between">
        <img href="#" alt="books-logo" src={navBarLogo} className='w-[100px] mx-8 my-4'/>
        <div className="flex gap-20 my-10 mx-4">
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 my-3 hover:text-purple-400">
              About <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        
    
        </div>
        </div>
        </>
    )
}

export default Navbar;