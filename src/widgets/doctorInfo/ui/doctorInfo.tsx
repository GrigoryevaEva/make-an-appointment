import { useEffect } from 'react'

import { useDoctorInfo } from '@/entities/doctor/doctorInfo'
import { renderContent } from '../model/render'

import style from './style.module.scss'

export const DoctorInfo = () => {

  const {
    doctorInfo, 
    loading,
    error,
    fetchDoctorInfo,
  } = useDoctorInfo(state => ({
    doctorInfo: state.doctorInfo,
    loading: state.loading,
    error: state.error,
    fetchDoctorInfo: state.fetchDoctorInfo
  }))

  useEffect(() => {
		fetchDoctorInfo()
	}, [])

  return (
    <div>
      {renderContent({
        loading, 
        error, 
        content: doctorInfo}
      )}
    </div>
  )
}
