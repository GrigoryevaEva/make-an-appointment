import { useMemo } from 'react';
import { renderContent } from '../model/render'
import { useDoctor } from '@/entities/doctor'

import style from './style.module.scss'

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

  const { freeSessions } = doctorSessions;

  return (
    <div className={style.root}>
      <h4>Available time</h4>
      <div className={style.root__list}>
        {
          useMemo(() => (
            renderContent({
              loading,
              error,
              content: freeSessions,
            })
          ), [doctorSessions])
        }
      </div>
    </div>
  )
}
