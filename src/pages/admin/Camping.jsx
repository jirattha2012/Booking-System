import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button";
import { FaArrowsRotate } from "react-icons/fa6";
import './camping.css'
import CategoryInput from "@/form/CategoryInput";
import MapDisplay from "@/components/map/MapDisplay";
import { campingSchema } from "@/components/utils/schemas"
import { createCamping } from "@/api/campingService"
import { useAuth } from "@clerk/clerk-react";
import { resizeFile } from '@/components/utils/resizeFile'
import { uploadFile } from '@/api/uploadFile'
import { useState, useEffect } from 'react'


// const campingSchema = z.object({
//     title: z.string().trim().min(2, 'Title must be more than 2 characters'),
//     price: z.coerce.number(),
//     description: z.string().trim().max(200, 'Description must be less than 200 characters'),
//     category: z.string(),
//     latitude: z.coerce.number(),
//     longitude: z.coerce.number()
// })


function Camping() {

    const { register, handleSubmit, formState, setValue, reset } = useForm({ 
        resolver: zodResolver(campingSchema),
        defaultValues: {
            file: undefined
        }
    });
    const { errors, isSubmitting } = formState
    // const errors = formState.errors
    // console.log('has problem! =>', errors)
    const { userId, sessionId, getToken, isLoaded, isSignedIn } = useAuth();

    const [isLoading, setIsLoading] = useState(false)


    const onSubmitData = async (data) => {
        const token = await getToken()
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log('Form Data: ', data);

        createCamping(data, token)
            .then((res) => {
                console.log('data = ', res)
                reset()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const onUploadFile = async (e) => {
        const token = await getToken()
        const file = e.target.files[0]
        // console.log(file)

        if (!file) { 
            return 
        } else {
            setIsLoading(true)
        }

        try {
            const resizerFile = await resizeFile(file)
            const response = await uploadFile(resizerFile, token)
            const uploaded = await response.data.result;
            console.log('Uploaded file URL:', uploaded);

            setValue('file', uploaded);     // ⭐ ใส่ URL เข้าไปใน field 'file'
            setIsLoading(false)
        }
        catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    }


    return (
        <section>
            <div className="my-8 text-xl font-bold">
                Create Camping
            </div>

            {/* Form */}
            <div className="border p-8 rounded-md px-10 min-w-72">
                <form onSubmit={handleSubmit(onSubmitData)}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {/* Title */}
                        <div>
                            <Label> Title </Label>
                            <Input type="text" placeholder="Title"
                                {...register('title')}
                                className={`
                                    rounded-[0.3rem]
                                    ${errors.title ? "border-2 border-red-600" : null} 
                                `}
                            />
                            <p className="text-xs text-red-900"> {errors.title?.message ? errors.title.message : null} </p>
                            {/* { errors.title && (<p> {errors.title.message} </p>) } */}
                        </div>

                        {/* Price */}
                        <div>
                            <Label> Price </Label>
                            <Input type="number" placeholder="Price"
                                {...register('price')}
                                className='rounded-[0.3rem]'
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <Label> Description </Label>
                            <Textarea type="text" placeholder="Description" rows={5}
                                {...register('description')}
                                className={`
                                    rounded-[0.3rem]
                                    ${errors.description ? "border-2 border-red-600" : null} 
                                `}
                            />
                            <p className="text-xs text-red-900"> {errors.description?.message ? errors.description.message : null} </p>
                        </div>

                        <div>
                            {/* CategorieInput module */}
                            <CategoryInput
                                register={register}
                                setValue={setValue}     // ทำให้ดึงข้อมูลจากหน้า CategorieInput มาแสดงที่หน้านี้ได้
                            />

                            {/* Upload JPG File */}
                            <div className="mt-4">
                                <Label> Upload image </Label>
                                <div className="flex items-center gap-2">
                                    <input type="hidden" {...register("file")} />
                                    <Input
                                        type='file'
                                        className='rounded-[0.3rem]'
                                        onChange={onUploadFile}
                                    />
                                    <div>
                                        { isLoading ?
                                            <FaArrowsRotate className='animate-spin' />
                                            : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Display Map */}
                    <MapDisplay
                        register={register}
                        location={[13.75, 100.50]}
                        setValue={setValue}
                    />


                    {/* Submit Button */}
                    <div className="flex justify-center items-center mt-6">
                        <Button
                            type='submit'
                            disabled={isSubmitting || isLoading}
                            className={`
                                border border-black py-2 px-6 w-48 min-w-[120px] bg-blue-600 text-white hover:bg-blue-700
                                ${isSubmitting || isLoading ? 'border-gray-400 text-gray-400' : null}
                            `}
                        >
                            {isSubmitting || isLoading ?
                                <>
                                    <FaArrowsRotate className='animate-spin' />
                                    <span> Please Wait </span>
                                    <div className="flex gap-[2px]">
                                        <span className="bounce-delay-1"> . </span>
                                        <span className="bounce-delay-2"> . </span>
                                        <span className="bounce-delay-3"> . </span>
                                    </div>
                                </>
                                : 'Create Camping'
                            }
                        </Button>
                    </div>

                </form>

            </div>

        </section>
    )
}

export default Camping
