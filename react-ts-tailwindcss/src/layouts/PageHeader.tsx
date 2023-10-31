// import logo from '../assets/logo.png';

export function  PageHeader (){
  return <div className="flex gap-10 lg:gap-20 justify-between">
    <div className="flex gap-4 items-center flex-shrink-0">
        <a href="/">
            {/* <img src={logo} alt="logo" className='h-6' /> */}
            <p className="font-medium ...">Glotec</p>
        </a>
    </div>
  </div>
}

