import { RejectedDataType } from "@/shared/types/error"

interface IRenderContentProps {
  loading: boolean
  error: null | RejectedDataType
  content: {
    name: string
    specialization: string
  }
}

export const renderContent = (props: IRenderContentProps) => {
  if (props.loading) return <p>Загрузка...</p>
  if (props.error) return <p>{`Ошибка: ${props.error.messageError}`}</p>
  return <><h2>{props.content.name}</h2><h3>{props.content.specialization}</h3></>
}