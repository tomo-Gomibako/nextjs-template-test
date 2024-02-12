import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig() ?? {}
const { stage } = publicRuntimeConfig ?? {}

export type Stage = 'production' | 'beta' | 'development'

export const isStage = (stage?: string): stage is Stage =>
  !!stage && ['production', 'beta', 'development'].includes(stage)

export const isPrd = (): boolean => stage === 'production'
