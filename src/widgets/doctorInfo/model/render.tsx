import { IDoctorInfo } from "@/shared/api/doctor/doctorInfo/types"
import { RejectedDataType } from "@/shared/types/error"

interface IRenderContentProps {
  loading: boolean
  error: null | RejectedDataType
  content: IDoctorInfo
}

export const renderContent = (props: IRenderContentProps) => {
  if (props.loading) return <p>Загрузка...</p>
  if (props.error) return <p>{`Ошибка: ${props.error.messageError}`}</p>
  return <><h2>{props.content.name}</h2><h3>{props.content.specialization}</h3></>
}