import { Button } from '@/shared/ui/button'
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
    <div className={style.root}>
      <div className={style.root__modal}>
        <h4>
          Make an appointment at {unixToTime(keySession)}?
        </h4>
        <div className={style.root__buttons}>
          <Button onClick={handelMakeAnAppointment}>Yes!</Button>
          <Button onClick={handelCancel}>Cancel</Button>
        </div>
      </div>
    </div>
  )
}
