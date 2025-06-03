import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@radix-ui/react-label"
import { categories } from "@/components/utils/categories"
import { useState } from "react"

function CategoryInput({ register, setValue }) {

    const [categoryValue, setCategoryValue] = useState('');

    const handleCategoryChange = (value) => {
        // console.log('category value =>', value)
        setCategoryValue(value);
        setValue('category', value)
    }

    return (
        <div>
            <div>
                <Label> Category </Label>
            </div>

            <input
                {...register('category')}
                placeholder="Selected Category"
                value={categoryValue}
                disabled
                readOnly
                hidden
            />

            <div className="w-full">
                <Select required onValueChange={handleCategoryChange}>
                    <SelectTrigger className="w-full rounded-[0.3rem]">
                        <SelectValue placeholder="Please Select Category" />
                    </SelectTrigger>

                    <SelectContent className="bg-white z-50">
                        {
                            categories.map((item, index) => {
                                return <SelectItem value={item.label} key={index}>
                                    <div className='flex gap-4'>
                                        <item.icon />
                                        <p className='capitalize'> {item.label} </p>
                                    </div>
                                </SelectItem>
                            })
                        }
                    </SelectContent>
                </Select>
            </div>

        </div>
    )
}

export default CategoryInput