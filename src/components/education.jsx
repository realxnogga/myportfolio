import { Fade, Zoom } from "react-awesome-reveal";

export const Education = () => {

        return (
                <div className="h-fit w-screen bg-gray-700 flex  items-center justify-center">
                        <div className="h-fit min-h-[32rem] w-[70rem] my-12 max-w-[90%] flex flex-wrap justify-center items-center content-center flex-row gap-7">


                                <Zoom>
                                        <div className="bg-gray-800 h-fit min-h-[11rem] max-w-[32rem] shadow-[5px_5px_0px_0px_rgba(109,40,217)] text-gray-400 p-4 flex flex-col">
                                                <Fade delay={200} fraction={0} cascade damping={1e-1}>

                                                        <h3 className='text-lg font-semibold'>LSPU - Los Banos</h3>
                                                        <p className='font-bold text-purple-700'>2021 - present</p>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, placeat tenetur!</p>
                                                </Fade>
                                        </div>
                                </Zoom>
                                <Zoom>

                                        <div className="bg-gray-800 h-fit min-h-[11rem] max-w-[32rem] shadow-[5px_5px_0px_0px_rgba(109,40,217)] text-gray-400 p-4 flex flex-col  ">
                                        <Fade delay={200} fraction={0} cascade damping={1e-1}>

                                                <h3 className='text-lg font-semibold'>MINHS - Masaya</h3>
                                                <p className='font-bold text-purple-700'>2019 - 2021</p>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate praesentium voluptatum repellat, voluptatem reiciendis quos aperiam aliquam laboriosam aspernatur commodi similique est explicabo!</p>
                                                </Fade>
                                        
                                        </div>
                                </Zoom>
                                <Zoom>

                                        <div className={`bg-gray-800 h-fit min-h-[11rem] max-w-[32rem] shadow-[5px_5px_0px_0px_rgba(109,40,217)] text-gray-400 p-4 flex flex-col`}>
                                        <Fade delay={200} fraction={0} cascade damping={1e-1}>
                                        
                                                <h3 className='text-lg font-semibold'>NLGMINHS - San Antonio</h3>
                                                <p className='font-bold text-purple-700'>2014 - 2019</p>
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere provident quae consequuntur, possimus quasi suscipit praesentium hic eveniet. Temporibus, tempore?</p>
                                                </Fade>
                                        
                                        </div>
                                </Zoom>
                                <Zoom>
                                        <div className="bg-gray-800 h-fit min-h-[11rem] max-w-[32rem] shadow-[5px_5px_0px_0px_rgba(109,40,217)] text-gray-400 p-4 flex flex-col  ">
                                        <Fade delay={200} fraction={0} cascade damping={1e-1}>
                                        
                                                <h3 className='text-lg font-semibold'>SIES - San Isidro</h3>
                                                <p className='font-bold text-purple-700'>2008 - 2014</p>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod aut quia cum at.</p>
                                                </Fade>
                                        
                                        </div>
                                </Zoom>

                        </div>

                </div>
        )
}