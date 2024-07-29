import { unixToTime } from '@/shared/function'
import { useModal } from '../model/useModal'
import { Button } from '@/shared/ui/button'

import style from './style.module.scss'

interface IFreeSessionProps {
  readonly id: number
}

export const FreeSession = (props: IFreeSessionProps) => {

  const {
    toggleActive,
    toggleKeySession,
  } = useModal(state => ({
    toggleActive: state.toggleActive,
    toggleKeySession: state.toggleKeySession,
  }))

  const handleOpenModal = () => {
    toggleKeySession(props.id)
    toggleActive()
  }

  return (
    <Button 
    key={props.id} 
    onClick={handleOpenModal}
    className={style.freeSession}
    >
      {unixToTime(props.id)}
    </Button>
  )
}
