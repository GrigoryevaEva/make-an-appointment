import { useEffect } from 'react'
import { Header } from '@/widgets/header'
import { DoctorInfo } from '@/widgets/doctorInfo'
import { FreeSessionsList } from '@/widgets/freeSessionsList'
import { useDoctor } from '@/entities/doctor'

import style from './style.module.scss'

export const DoctorDetail = () => {

  const {
    fetchDoctorInfo,
  } = useDoctor(state => ({
    fetchDoctorInfo: state.fetchDoctor
  }))

  useEffect(() => {
		fetchDoctorInfo()
	}, [])


  return (
    <>
      <Header />
      <DoctorInfo />
      <FreeSessionsList />
    </>
  )
}
