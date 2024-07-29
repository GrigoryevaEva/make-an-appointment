import { useDoctor } from '@/entities/doctor'
import { useModal } from '../model/useModal'

import { unixToTime } from '@/shared/function'

import style from './style.module.scss'

export const Modal = () => {

  const {
    makeAnAppointment,
  } = useDoctor(state => ({
    makeAnAppointment: state.makeAnAppointment
  }))

  const {
    keySession,
    toggleActive,
    toggleKeySession
  } = useModal(state => ({
    keySession: state.keySession,
    toggleActive: state.toggleActive,
    toggleKeySession: state.toggleKeySession,
  }))

  const handelMakeAnAppointment = () => {
    makeAnAppointment(keySession)
    toggleActive()
    toggleKeySession()
  }

  const handelCancel = () => {
    toggleActive()
    toggleKeySession()
  }

  return (
    <div>
      <p>Make an appointment at {unixToTime(keySession)}?</p>
      <div onClick={handelMakeAnAppointment}>Yes!</div>
      <div onClick={handelCancel}>Cancel</div>
    </div>
  )
}
