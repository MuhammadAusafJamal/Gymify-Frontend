import React from 'react'
import GalleryImg1 from "../assets/galleryImg1.jpg"
import GalleryImg2 from "../assets/galleryImg2.jpg"
import GalleryImg3 from "../assets/galleryImg3.jpg"
import GalleryImg4 from "../assets/galleryImg4.jpg"
import GalleryImg5 from "../assets/galleryImg5.jpg"
import GalleryImg6 from "../assets/galleryImg6.jpg"

export default function Gallery() {
  return (
    <div>
      <section className="text-gray-600 body-font">
         {/* <h1 className="sm:text-3xl text-xxl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-1 text-center">Our Gym </h1> */}
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    {/* <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 text-center">Master Cleanse Reliac Heirloom</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div> */}
   
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={GalleryImg1}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={GalleryImg2}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={GalleryImg3}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={GalleryImg4}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={GalleryImg5}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={GalleryImg6}/>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
