import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// YUP SCHEMA — the bouncer, defines the rules
const schema = yup.object({
    name: yup.string().required('Name is required'),
    company: yup.string().required('Company is required'),
    department: yup.string().required('Department is required')
})

interface AddBossFormProps {
    onSubmit: (data: { name: string; company: string; department: string }) => void
}

export default function AddBossForm({ onSubmit }: AddBossFormProps) {

    // REACT HOOK FORM — the form manager
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    return (
        <div className="flex flex-col gap-3">
            <input
                placeholder='Name'
                {...register('name')}
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <input
                placeholder='Company'
                {...register('company')}
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company.message}</p>}

            <input
                placeholder='Department'
                {...register('department')}
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.department && <p className="text-red-500 text-sm">{errors.department.message}</p>}

            <button
                onClick={handleSubmit(onSubmit)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
                Add Boss
            </button>
        </div>
    )
}