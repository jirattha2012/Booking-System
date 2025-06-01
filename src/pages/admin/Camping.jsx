import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button";
import { FaArrowsRotate } from "react-icons/fa6";
import './camping.css'

const campingSchema = z.object({
    title: z.string().trim().min(2, 'Title must be more than 2 characters'),
    price: z.coerce.number(),
    description: z.string().trim().max(200, 'Description must be less than 200 characters')
})

function Camping() {

    const { register, handleSubmit, formState } = useForm({ resolver: zodResolver(campingSchema) });

    const { errors, isSubmitting } = formState
    // console.log('has problem! =>', errors)
    // const setUseFormErrors = formState.errors
    // console.log('has problem! =>', setUseFormErrors)

    const onSubmitData = async(data) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log(data)
    }
    console.log(isSubmitting)


    return (
        <section>
            <div className="my-8 text-xl font-bold"> 
                Create Camping 
            </div>
            
            <div className="border p-8 rounded-md px-10">
                <form onSubmit={handleSubmit(onSubmitData)}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {/* Title */}
                        <div>
                            <Label> Title </Label>
                            <Input type="text" placeholder="Title" 
                                {...register('title')} 
                                className={`
                                    rounded-[0.3rem]
                                    ${errors.title ? "border-2 border-red-600" : null } 
                                `}
                            />
                            <p className="text-xs text-red-900"> { errors.title?.message ? errors.title.message : null } </p>
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
                                    ${errors.description ? "border-2 border-red-600" : null } 
                                `}
                            />
                            <p className="text-xs text-red-900"> { errors.description?.message ? errors.description.message : null } </p>
                        </div>
                        
                        <div className="flex justify-center items-center mt-6">
                            <Button
                                type='submit'
                                disabled={isSubmitting}
                                className={`
                                    border border-black py-2 px-6 w-2/6 min-w-[120px] bg-blue-600 text-white hover:bg-blue-700
                                    ${isSubmitting ? 'border-gray-400 text-gray-400' : null}
                                `}
                            > 
                                { isSubmitting ? 
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
                    </div>
                </form>

            </div>

        </section>
    )
}

export default Camping
