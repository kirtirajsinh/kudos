import React from 'react'

const Step3 = ({formData}) => {
  return (
    <div className=" md:flex justify-center align-center gap-x-[32px]">
        <div className="flex flex-col justify-center align-center m-auto">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Header</h3>
              <h4 className="mx-2">{formData.Header}</h4>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Message</h3>
              <h4 className="mx-2">{formData.Message} </h4>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Start Date</h3>
              <h4 className="mx-2">{formData.startDate}</h4>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">End Date</h3>
              <h4 className="mx-2">{formData.endDate} </h4>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Links</h3>
              <h4 className="mx-2">{formData.Link} </h4>
            </div>
        </div>
        <figure className="mb-6 m-auto max-w-[400px] max-h-[400px] rounded-sm mb-4 shadow-media aspect-square bg-white h-[280px] w-[280px] sm:w-[400px] sm:h-[400px]  ">
            <img src="https://images.mintkudos.xyz/nft/default/blueGreenPreview.png" alt="img" className="rounded-sm"/>
        </figure>
    </div>
  )
}

export default Step3