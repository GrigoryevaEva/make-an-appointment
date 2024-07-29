import { unixToTime } from '@/shared/function'
import { useModal } from '../model/useModal'

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
    <div onClick={handleOpenModal}>
      {unixToTime(props.id)}
    </div>
  )
}
