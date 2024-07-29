import { useMemo } from 'react'
import { useDoctor } from '@/entities/doctor'
import { renderContent } from '../model/render'

import style from './style.module.scss'

export const DoctorInfo = () => {
  const {
    doctorInfo,
    loading,
    error
  } = useDoctor(state => ({
    doctorInfo: state.doctorInfo,
    loading: state.loading,
    error: state.error,
  }))

  return (
    <div>
      {
        useMemo(() => (
          renderContent({
            loading,
            error,
            content: doctorInfo,
          })
        ), [doctorInfo])
      }
    </div>
  )
}
