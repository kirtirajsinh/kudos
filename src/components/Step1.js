import React from 'react'

const Step1 = ({formData, setFormData}) => {
  return (
    <div className="md:flex justify-center gap-x-[32px]">
        <form className="m-auto">
        <div className="mb-2">
            <label htmlFor="header" className="mb-2 text-xl font-semibold">
                Header*
         </label>
            <input id="header" required className="h-13 w-full rounded-md px-5 py-1 border border-red" type="text" placeholder="Header" value={formData.Header}
        onChange={(e) => {
          setFormData({ ...formData, Header: e.target.value });
        }}/>
        </div>
        <div className="mb-4">
            <label htmlFor="message" className="mb-2 text-xl font-semibold">
                Message
         </label>
            <textarea id="message" className="h-13 w-full rounded-md px-5 py-1 border " type="text" placeholder="Message" value={formData.Message}
        onChange={(e) => {
          setFormData({ ...formData, Message: e.target.value });
        }}/>
        </div>
        <div className="mb-4 space-x-4">
            <div className="flex flex-row">
                <div>
                <label htmlFor="startDate" className="mb-2 text-xl font-semibold">
                Start Date
         </label>
            <input id="startDate" className="h-13 w-full rounded-md px-5 py-1 border" type="date" placeholder="Start date" value={formData.startDate}
        onChange={(e) => {
          setFormData({ ...formData, startDate: e.target.value });
        }}/>
                </div>
                <div>
                <label htmlFor="endDate" className="mb-2 text-xl font-semibold">
                End Date
         </label>
            <input id="endDate" className="h-13 w-full rounded-md px-5 py-1 border" type="date" placeholder="End Date" value={formData.endDate}
        onChange={(e) => {
          setFormData({ ...formData, endDate: e.target.value });
        }}/>
                </div>
            </div>
            
        </div>
        <div className="mb-4">
            <label htmlFor="Links" className="mb-2 text-xl font-semibold">
                Links
         </label>
            <textarea id="Links" className="h-13 w-full rounded-md px-5 py-1 border" type="text" placeholder="Header" value={formData.Link}
        onChange={(e) => {
          setFormData({ ...formData, Link: e.target.value });
        }}/>
        </div>
        </form>
        <figure className="mb-6 m-auto max-w-[400px] max-h-[400px] rounded-sm mb-4 shadow-media aspect-square bg-white h-[280px] w-[280px] sm:w-[400px] sm:h-[400px]  ">
            <img src="https://images.mintkudos.xyz/nft/default/blueGreenPreview.png" alt="img" className="rounded-sm"/>
        </figure>
    </div>
  )
}

export default Step1