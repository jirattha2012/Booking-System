import { create } from 'zustand'
import { getCampingList } from '@/api/campingService'

// Zustand Global State สามารถเรียกใช้ได้ทุก Component

// แบบที่ 1
// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))

// แบบที่ 2
const campingStore = (set) => ({
    campings: [],
    actionCampingList: async () => {
        try {
            const res = await getCampingList()
            console.log(res)
            set({ campings: res.data.result })
        }
        catch (err) {
            console.log(err)
        }
    }
})

const useCampingStore = create(campingStore)

export default useCampingStore