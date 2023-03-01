import React from 'react'

const Pagination = ({ links, pagination, setPagination, currentPage }) => {
  return (
    <nav aria-label="Pagination">
      <ul className="inline-flex items-center -space-x-px">
        {
          links.map((link, key) => {
            const classes = !link.url ?
              "cursor-not-allowed bg-gray-100 dark:bg-gray-700 border-gray-200 hover:bg-gray-100 text-gray-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              :
              "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
            const rounded = link.label.includes("Previous") ? "rounded-l-lg" : "rounded-r-lg";
            const active = currentPage == link.label ?
              "z-10 text-indigo-600 border-indigo-400 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700 dark:border-indigo-700 dark:bg-indigo-700 dark:text-white"
              :
              "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
            return <li key={key}>
              {
                (/^[0-9]+$/.test(link.label)) ?
                  (
                    <a href={link.url} onClick={(e) => { e.preventDefault(); setPagination(link.label) }} className={`block relative px-3 py-2 leading-tight border ${active}`}>{link.label}</a>
                  )
                  :
                  (
                    link.label.includes("Previous") ?
                      <a href={link.url} onClick={(e) => { e.preventDefault(); link.url && setPagination(pagination - 1) }} className={`block relative px-3 py-2 ml-0 leading-tight border ${classes} ${rounded}`}>
                        <span className="sr-only">Previous</span>
                        <svg aria-hidden="true" className={`w-5 h-5 ${!link.url && "fill-zinc-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      </a>
                      :
                      <a href={link.url} onClick={(e) => { e.preventDefault(); link.url && setPagination(pagination + 1) }} className={`block relative px-3 py-2 ml-0 leading-tight border ${classes} ${rounded}`}>
                        <span className="sr-only">Next</span>
                        <svg aria-hidden="true" className={`w-5 h-5 ${!link.url && "fill-zinc-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                      </a>
                  )
              }

            </li>;
          })
        }
      </ul>
    </nav >

  )
}

export default Pagination
