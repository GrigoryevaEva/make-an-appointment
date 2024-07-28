import { renderContent } from '../model/render'
import { useDoctor } from '@/entities/doctor'

export const FreeSessionsList = () => {
  const {
    doctorSessions,
    loading,
    error
  } = useDoctor(state => ({
    doctorSessions: state.doctorSessions,
    loading: state.loading,
    error: state.error,
  }))

  const { freeSessions } = doctorSessions

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
