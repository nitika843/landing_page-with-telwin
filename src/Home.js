import React from 'react'



const Home = () => {

   
    return (
        <div>
            <div className='bg-white'>
                <nav className=" bg-[#172236] md:bg-white sm:bg-white xs:bg-white xxs:bg-white" data-headlessui-state="">
                    <div className="mx-auto  px-2  sm:px-6  w-full ">
                        <div className="relative flex h-16 items-center justify-between">
                            {/* <img src="../../public/Images/smallLogo.jpeg" className="absolute inset-y-2 rounded-lg right-1 w-32 right-2 xl:hidden" /> */}
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden lg:hidden xl:hidden">
                                <button className="sm:inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700  hover:text-white focus:outline-none 
                                focus:ring-2 focus:ring-inset focus:ring-white lg:inline-flex xl:inline-flex" id="headlessui-disclosure-button-:r1:" type="button" aria-expanded="false" data-headlessui-state="">
                                    <span className="sr-only">Open main menu</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="block h-6 w-6 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg></button>
                            </div>
                            <div className=" w-full flex flex-1 items-center justify-center sm:items-stretch sm:justify-start  md: justify-stretchs lg:justify-stretch lg:items-stretch xl:items-stretch"><div className="flex flex-shrink-0 items-center justify-center">
                                <div className="hidden sm:ml-6  sm:block  lg:ml-6 xl:block xl:ml-6 lg:block">
                                    <div className="flex space-x-24 justify-center items-center myDIV">
                                        {/* <img src="../../public/Images/smallLogo.jpeg" className="w-36 right-20 rounded-lg" style="position: relative;" />*/}
                                        <a id="dark" className="hover:bg-blue-400 text-white rounded-md px-6 py-2 text-base font-medium " aria-current="page " href="/">Home</a>
                                        <a id="" className=" text-white hover:bg-blue-400 hover:text-white rounded-md px-6 py-2 text-sm font-medium " href="/aboutus">About Us</a><a id="" className=" text-white hover:bg-blue-400 hover:text-white rounded-md px-6 py-2 text-sm font-medium  " href="/career">Career</a>
                                        <a id="" className="text-white hover:bg-blue-400 hover:text-white rounded-md px-6 py-2 text-sm font-medium  " href="/contactus">Contact Us</a><a className=" text-white hover:bg-blue-400 hover:text-white rounded-md px-6 py-2 text-md font-medium   " href="/login">Login</a>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0   lg:pr-0 lg:ml-6 lg:inset-auto lg:static xl:static xl:inset-auto xl:ml-6 ml:pr-0 ">
                                <div className="relative ml-3" data-headlessui-state="">
                                    <div>
                                        <button className="flex  bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="headlessui-menu-button-:r3:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                                            <span className="sr-only">Open user menu</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

{/* vj */}

            {/* slider */}
            <div
                id="carouselExampleIndicators"
                className="relative"
                data-te-carousel-init
                data-te-ride="carousel">
                <div
                    className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                    data-te-carousel-indicators>
                    <button
                        type="button"
                        data-te-target="#carouselExampleIndicators"
                        data-te-slide-to="0"
                        data-te-carousel-active
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-current="true"
                        aria-label="Slide 1"></button>
                    <button
                        type="button"
                        data-te-target="#carouselExampleIndicators"
                        data-te-slide-to="1"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 2"></button>
                    <button
                        type="button"
                        data-te-target="#carouselExampleIndicators"
                        data-te-slide-to="2"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 3"></button>
                </div>
                <div
                    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <div
                        className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item
                        data-te-carousel-active>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                            className="block w-full"
                            alt="Wild Landscape" />
                    </div>
                    <div
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                            className="block w-full"
                            alt="Camera" />
                    </div>
                    <div
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                            className="block w-full"
                            alt="Exotic Fruits" />
                    </div>
                </div>
                <button
                    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleIndicators"
                    data-te-slide="prev">
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </span>
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Previous</span>

                </button>
                <button
                    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleIndicators"
                    data-te-slide="next">
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Next</span>
                </button>
            </div><br />
    


            {/* card */}

            <div>
                <section className="text-neutral-700 dark:text-neutral-300  text-center w-full m-auto grid grid-col-3 md:grid-cols-1 sm:grid-col-1">
                    <div className="mx-auto text-center  md:max-w-xl w-3/5 xxs:w-11/12" style={{ color: 'black' }}>
                        <h3 className="mb-6 text-3xl font-bold">Love From Clients</h3><p className="mb-6 pb-2 md:mb-12 md:pb-0">
                            Sweet and sour, we like both tastes. Sweet makes us glad and aware of our responsibility while the sour keeps us awake and on our toes to work harder. Please give us your valuable feedbacks.</p>
                    </div>

                    <div className="grid gap-5 text-center grid-cols-3 mx-7 xxs:grid-cols-1">

                        <div
                            className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <div
                                className="relative overflow-hidden bg-cover bg-no-repeat"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                    alt="" />
                                <a href="#!">
                                    <div
                                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                                </a>
                            </div>
                            <div className="p-6">
                                <h5
                                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Button
                                </button>
                            </div>
                        </div>
                        <div
                            className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <div
                                className="relative overflow-hidden bg-cover bg-no-repeat"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                    alt="" />
                                <a href="#!">
                                    <div
                                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                                </a>
                            </div>
                            <div className="p-6">
                                <h5
                                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Button
                                </button>
                            </div>
                        </div>
                        <div
                            className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <div
                                className="relative overflow-hidden bg-cover bg-no-repeat"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <img
                                    className="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                                    alt="" />
                                <a href="#!">
                                    <div
                                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                                </a>
                            </div>
                            <div className="p-6">
                                <h5
                                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Card title
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Button
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <div>
            <div className="xxs:w-sceen">
            <div className="px-6 mx-auto my-40 w-3/5 w-auto xxs:w-full xl:container bg-slate-600">
           <section className="mb-32 text-gray-800 background-radial-gradient  ">
           <div className="px-0 py-16 md:px-12 text-center lg:text-left">
           <div className="container mx-auto xl:px-32"><div className="grid lg:grid-cols-3 gap-12  items-center  ">
           <div className="mt-12 lg:mt-0 ">
           <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-white ">Do not miss <br/> 
           <span>any updates</span></h1>
           <p className="mb-4 opacity-70 lead text-blue-200">We will write rarely and only high-quality content.</p>
           </div>
           <div className="mb-6 lg:mb-0">
           <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
           <h2 className="text-3xl font-bold mb-12">Subscribe to the newsletter</h2>
           <div className="form-group mb-6">
           <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90" placeholder="Name"/>
           </div>
           <div className="form-group mb-6">
           <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput91" placeholder="Email address"/>
           </div>
           <div className="form-group form-check text-center mb-6">
           <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" id="exampleCheck96" checked="" />
           <label className="form-check-label inline-block text-gray-800" for="exampleCheck96">I have read and agree to the terms</label>
           </div>
           <button className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Subscribe</button>
           </div>
           </div>
           </div>
           </div>
           </div>
           </section>
          
            </div>
            </div>
            </div>

        </div>

    )
}

export default Home
