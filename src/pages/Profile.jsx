import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { FaArrowsRotate } from "react-icons/fa6";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import axios from "axios";
import { profileSchema } from "@/components/utils/schemas"
import { useAuth } from "@clerk/clerk-react";
import { createProfile } from "@/api/profileService"


// const profileSchema = z.object({
//     first_name: z.string(),
//     last_name: z.string()
// })


function Profile() {

    const { register, handleSubmit, formState, setValue } = useForm({ resolver: zodResolver(profileSchema) });
    const { errors, isSubmitting } = formState

    const { userId, sessionId, getToken, isLoaded, isSignedIn } = useAuth();    // Clerk

    const onSubmitData = async (data) => {
        // สร้าง token
        const token = await getToken()
        // data.token = token
        // console.log(token)

        // data.clerk_id = userId    // ส่งไป Server เพื่อ auth
        // console.log(clerk_id)
        

        // await กับ .then ทำหน้าที่เหมือนกัน
        // await axios.post('http://localhost:5000/api/profile', data)
        //     .then((res) => {
        //         console.log(res.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })

        // async/await (แนะนำ) >> ย้ายไป 
        // try {
        //     const res = await axios.post('http://localhost:5000/api/profile', data)
        //     console.log(res.data)
        // } catch (err) {
        //     console.log(err)
        // }

        createProfile(data, token)
            .then((res) => {
                console.log('data = ', res)
            })
            .catch((err) => {
                console.log(err)
            })

    }




    return (
        <>
            <div className="my-8 text-xl font-bold">
                Create Profile
            </div>

            {/* Form */}
            <div className="border p-8 rounded-md px-10 min-w-72">
                <form onSubmit={handleSubmit(onSubmitData)} className="flex gap-2">
                    {/* First Name */}
                    <div>
                        <Label> First Name </Label>
                        <Input type="text" placeholder="First Name"
                            {...register('first_name')}
                            className='rounded-[0.3rem]'
                        />

                        {/* Error */}
                        <p className="text-xs text-red-900"> {errors.first_name?.message ? errors.first_name.message : null} </p>
                    </div>

                    {/* Last Name */}
                    <div>
                        <Label> Last Name </Label>
                        <Input type="text" placeholder="Last Name"
                            {...register('last_name')}
                            className='rounded-[0.3rem]'
                        />

                        {/* Error */}
                        <p className="text-xs text-red-900"> {errors.last_name?.message ? errors.last_name.message : null} </p>
                    </div>


                    {/* Submit Button */}
                    <div className="flex justify-center items-center mt-6">
                        <Button
                            type='submit'
                            disabled={isSubmitting}
                            className={`
                                border border-black py-2 px-6 w-48 min-w-[120px] bg-blue-600 text-white hover:bg-blue-700
                                ${isSubmitting ? 'border-gray-400 text-gray-400' : null}
                            `}
                        >
                            {isSubmitting ?
                                <>
                                    <FaArrowsRotate className='animate-spin' />
                                    <span> Please Wait... </span>
                                </>
                                : 'Create Profile'
                            }
                        </Button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Profile