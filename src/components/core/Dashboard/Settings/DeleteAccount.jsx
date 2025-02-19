import { FiTrash2 } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { deleteProfile } from "../../../../services/operations/SettingsAPI"

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleDeleteAccount() {
    try {
      dispatch(deleteProfile(token, navigate))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <>
      <div className="my-10 flex flex-row gap-x-5 rounded-md bg-richblack-25 hover:ring-2 hover:ring-red-700 hover:visible  p-8 px-12">
        <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-red-700">
          <FiTrash2 className="text-3xl text-richblack-5" />
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-richblack-900">
            Delete Account
          </h2>
          <div className="w-3/5 text-richblack-900">
            <p>Would you like to delete account?</p>
            <p>
              This account may contain Job Advertisements. Deleting your account is
              permanent and will remove all the content associated with it.
            </p>
          </div>
          <button
            type="button"
            className="w-fit cursor-pointer italic text-red-700 font-semibold"
            onClick={handleDeleteAccount}
          >
            I want to delete my account.
          </button>
        </div>
      </div>
    </>
  )
}
