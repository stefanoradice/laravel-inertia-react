import MediaTable from '../Pages/Media/Partials/MediaTable';

const MediaLibrary = () => {
  const [openModal, setOpenModal] = useState(false);
  const showHideModal = (status) => {
    setOpenModal(status)
  }
  return (
    <div/*  onClick={() => showHideModal(true)} */><span onClick={() => showHideModal(true)} >open library</span>  <ModalLibrary openModal={openModal} showHideModal={showHideModal} /></div>
  )
}

export const ModalLibrary = ({ openModal, showHideModal }) => {

  const [tabOpen, setTabOpen] = useState('library');
  const classTabOpen = "text-gray-900 bg-gray-100  active dark:bg-gray-700 dark:text-white";
  const classTabClose = "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700";
  return (
    <div id="mediaLibrary" tabIndex="-1" aria-hidden={`${openModal ? 'false' : 'true'}`} className={`fixed top-0 left-0 right-0 z-50 ${openModal ? 'block' : 'hidden'} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`} >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Media Library
            </h3>
            <button onClick={() => showHideModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
              <li className="w-full">
                <a href="#" onClick={(e) => { e.preventDefault(); setTabOpen('library') }} className={`inline-block w-full p-4 focus:ring-4 focus:ring-blue-300 focus:outline-none ${tabOpen == 'library' ? classTabOpen : classTabClose}`} aria-current="page">Media Library</a>
              </li>
              <li className="w-full">
                <a href="#" onClick={(e) => { e.preventDefault(); setTabOpen('upload') }} className={`inline-block w-full p-4  focus:ring-4 focus:ring-blue-300 focus:outline-none ${tabOpen == 'upload' ? classTabOpen : classTabClose}`}>Upload</a>
              </li>
            </ul>
            <div className={`${tabOpen == 'library' ? 'block' : 'hidden'}`}>
              <MediaTable />
            </div>
            <div className={`${tabOpen == 'upload' ? 'block' : 'hidden'}`}>

              <div className="flex items-center justify-center flex-wrap w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input />
                  </div>
                </label>
              </div>
            </div>

          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          </div>
        </div>
      </div>
    </div >
  )
}

export default MediaLibrary
