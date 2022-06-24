import React, {useState} from 'react'

const Step2 = ({formData, setFormData}) => {
  const [permission, setPermission] = useState('allowedAddress');
  return (
    <div className="md:flex justify-center gap-x-[32px]">
        <form className="m-auto flex-col justify-center">
        <div className="mb-2 flex flex-col">
          <div>
          <label htmlFor="allowedAddress" className="mb-2 text-xl font-semibold">
            <input id="allowedAddress" type="radio" value="allowedAddress" checked={permission === 'allowedAddress'} onChange={(e) => setPermission(e.target.value)} />
                Allowed Addresses
         </label>
          </div>
            
         {permission === 'allowedAddress' && 
            (
              <textarea id="message" className="h-13 w-full rounded-md px-5 py-1 border " type="text" placeholder="Add Wallet Address for ENS Domain" value={formData.allowedAddress}
              onChange={(e) => {
                setFormData({ ...formData, allowedAddress: e.target.value });
              }}/>
            )
         }
            
        </div>
        <div className="mb-2">
          <div className="flex flex-col">
          <label htmlFor="allowedAddress" className="mb-2 text-xl font-semibold">
            <input id="allowedAddress" type="radio" value="anyone" checked={permission === 'anyone'} onChange={(e) => setPermission(e.target.value)} />
                Anyone with Link
         </label>
          </div>
        
         {permission === 'anyone' && 
            ( <div className="flex flex-col"><label>Maximum Claims </label>
            <input id="allowedAddress" className=" w-20 border h-13 rounded px-5" type="Number"  /></div>)
         }
            
        </div>
        <div className="mb-4 space-x-4">
                <div>
                <label htmlFor="startDate" className="mb-2 text-xl font-semibold">
                Expiry Date
         </label>
            <input id="startDate" className="h-13 w-full rounded-md px-5 py-1 border" type="date" placeholder="Start date" value={formData.startDate}
        onChange={(e) => {
          setFormData({ ...formData, startDate: e.target.value });
        }}/>     
            </div>
            
        </div>
        </form>
        <figure className="mb-6 m-auto max-w-[400px] max-h-[400px] rounded-sm mb-4 shadow-media aspect-square bg-white h-[280px] w-[280px] sm:w-[400px] sm:h-[400px]  ">
            <img src="https://images.mintkudos.xyz/nft/default/blueGreenPreview.png" alt="img" className="rounded-sm"/>
        </figure>
    </div>
  )
}

export default Step2