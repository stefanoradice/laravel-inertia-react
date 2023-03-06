import Pagination from '@/Components/Pagination'
import React, { useEffect, useState } from 'react'

const PermissionTable = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const [count, setCount] = useState(0);
  const [permissions, setPermissions] = useState([]);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    (async (pagination) => {
      const url = `/api/v1/permissions?page=${pagination}`;
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setPermissions(response.data.data);
        setCount(response.data.length);
      } catch (err) {
        setIsError(true);
        setCount(0);
      }
      setIsLoading(false);
    })(pagination);
  }, [pagination]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {!isLoading && isError ? (
        <div className='dark:text-white'>No permissions error</div>
      ) : !isLoading && !isError ? (
        <>
          {permissions.length ?
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Permission name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  permissions.map((permission) => {
                    return <tr key={permission.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {permission.name}
                      </th>
                      <td className="px-6 py-4">
                        <a href={route('posts.edit', permission)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                    </tr>
                  })
                }

              </tbody>
            </table>
            :
            <div className="dark:text-white">No posts found.</div>
          }
          {data.meta.links.length > 3 &&
            <div className="flex justify-center py-4 dark:bg-gray-800">
              <Pagination links={data.meta.links} pagination={pagination} setPagination={setPagination} currentPage={data.meta.current_page} />
            </div>
          }
        </>
      ) : (
        <div className='dark:text-white'>Loading...</div>
      )

      }
    </div>
  )
}

export default PermissionTable
