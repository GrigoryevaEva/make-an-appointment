import { unixToTime } from "@/shared/function"
import { RejectedDataType } from "@/shared/types/error"

export const renderList = (freeSessions: number[]) => (
  freeSessions?.map((i) => (
    <p>{unixToTime(i)}</p>
  ))
)

interface IRenderContentProps {
  loading: boolean
  error: null | RejectedDataType
  content: number[]
}

export const renderContent = (props: IRenderContentProps) => {
  if (props.loading) return <p>Загрузка...</p>
  if (props.error) return <p>{`Ошибка: ${props.error.messageError}`}</p>
  return renderList(props.content)
}