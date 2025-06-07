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


// const campingSchema = z.object({
//     title: z.string().trim().min(2, 'Title must be more than 2 characters'),
//     price: z.coerce.number(),
//     description: z.string().trim().max(200, 'Description must be less than 200 characters'),
//     category: z.string(),
//     latitude: z.coerce.number(),
//     longitude: z.coerce.number()
// })


function Camping() {

    const { register, handleSubmit, formState, setValue } = useForm({ resolver: zodResolver(campingSchema) });
    const { errors, isSubmitting } = formState
    // const errors = formState.errors
    // console.log('has problem! =>', errors)

    const { userId, sessionId, getToken, isLoaded, isSignedIn } = useAuth();

    const onSubmitData = async (data) => {
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(data)

        const token = await getToken()

        createCamping(data, token)
            .then((res) => {
                console.log('data = ', res)
            })
            .catch((err) => {
                console.log(err)
            })
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
                            <Textarea type="text" placeholder="Description" rows={2}
                                {...register('description')}
                                className={`
                                    rounded-[0.3rem]
                                    ${errors.description ? "border-2 border-red-600" : null} 
                                `}
                            />
                            <p className="text-xs text-red-900"> {errors.description?.message ? errors.description.message : null} </p>
                        </div>

                        {/* CategorieInput module */}
                        <CategoryInput
                            register={register}
                            setValue={setValue}
                        />
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
                            disabled={isSubmitting}
                            className={`
                                border border-black py-2 px-6 w-48 min-w-[120px] bg-blue-600 text-white hover:bg-blue-700
                                ${isSubmitting ? 'border-gray-400 text-gray-400' : null}
                            `}
                        >
                            {isSubmitting ?
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
