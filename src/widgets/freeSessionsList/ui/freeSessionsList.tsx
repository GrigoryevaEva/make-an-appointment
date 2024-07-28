import { useEffect } from 'react'
import { useDoctorSessions } from '@/entities/doctor/doctorSessions'

import style from './style.module.scss'
import { unixToTime } from '@/shared/function'
import { renderContent } from '../model/render'

export const FreeSessionsList = () => {

  const {
    doctorSessions, 
    loading,
    error,
    fetchDoctorSessions,
  } = useDoctorSessions(state => ({
    doctorSessions: state.doctorSessions,
    loading: state.loading,
    error: state.error,
    fetchDoctorSessions: state.fetchDoctorSessions
  }))

  const { freeSessions } = doctorSessions

  console.log(freeSessions)

  useEffect(() => {
		fetchDoctorSessions()
	}, [])

  return (
    <div>
      {renderContent({
        loading,
        error,
        content: freeSessions
      })}
    </div>
  )
}
