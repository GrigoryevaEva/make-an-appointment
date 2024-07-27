import { Header } from '@/widgets/header'
import { DoctorInfo } from '@/widgets/doctorInfo'
import { FreeSessionsList } from '@/widgets/freeSessionsList'

import style from './style.module.scss'

export const DoctorDetail = () => {
  return (
    <>
      <Header />
      <DoctorInfo />
      <FreeSessionsList />
    </>
  )
}
