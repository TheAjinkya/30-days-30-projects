import React, { useEffect, useState } from 'react'

function GitHubUsers() {

  const [users, setUsers] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsFetching(true)
        const response = await fetch("https://api.github.com/users")
        const responseData = await response.json();
        console.log("responseData", responseData)
        if (!response.ok) {
          throw new Error("something went wrong!")
        }
        setUsers(responseData)
        setIsFetching(false)
      } catch (error) {
        console.log(error.message)
      }
    }
    getData();
  }, [])


  return (
    <div>
      <div>
        {console.log("COmponent Rendered")}
        {isFetching ? <>Loading...</> :
          <>{users && users.slice(0, 5).map(user => {
            return (<div class="flex items-start gap-2.5">
              <img class="w-8 h-8 rounded-full" src={user.avatar_url} alt="Bonnie Green image" />
              <div class="flex flex-col gap-1">
                <div class="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                  <div class="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                    <span class="text-sm font-semibold text-gray-900 dark:text-white">{user.login}</span>
                  </div>
                  <div class="group relative my-2.5 ">
                    <img src={user.avatar_url} class="rounded-lg" />
                  </div>
                </div>
              </div>
            </div>)
          })}</>}
      </div>
    </div>
  )
}

export default GitHubUsers