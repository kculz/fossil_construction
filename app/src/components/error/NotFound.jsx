import { CgUnavailable} from 'react-icons/cg';

const NotFound = () => {
  return (
    <div className="flex flex-col gap-5 w-screen h-screen justify-center items-center bg-white md:px-32 px-10">
    <CgUnavailable size={100} color='red' />
    <h1>Oooops Page not found.</h1>
</div>
  )
}

export default NotFound