import React, {useState} from 'react'
import Step1 from './Step1.js'
import Step2 from './Step2.js'
import Step3 from './Step3.js'

const Form = () => {
    const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    Header: "",
    Message: "",
    startDate: "",
    endDate: "",
    Link: "",
    allowedAddress: "",
    maximumClaim: "",
  });

  const FormTitles = ["Send Kudos", "Distribute Kudos", "Submit"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Step1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Step2 formData={formData} setFormData={setFormData} />;
    } else {
      return <Step3 formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div>
        <div className="flex flex-col justify-center align-center">
      <div>
        <h1 className="text-4xl font-extrabold text-center">{FormTitles[page]}</h1>
      </div>
      <div className="body">{PageDisplay()}</div>
      <div className=" flex flex-row justify-center align-center">
        <button
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
          className="bg-gradient-to-r from-[#b9e5cd] to-[#b7d4f7]  text-white shadow-button hover:bg-blue-700 hover:scale-105 transition duration-200 ease-out font-bold py-2 px-4 rounded-full mr-4"
        >
         Prev
        </button>
        <button
          onClick={() => {
            if (page === FormTitles.length - 1) {
              alert("FORM SUBMITTED");
              console.log(formData);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
          className="bg-gradient-to-r from-[#b9e5cd] to-[#b7d4f7]  text-white shadow-button hover:bg-blue-700 hover:scale-105 transition duration-200 ease-out font-bold py-2 px-4 rounded-full mr-4"
        >
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  </div>
  )
}

export default Form