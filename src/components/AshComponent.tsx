import * as React from 'react'

interface Props {
  title: string;
}

export default function AshComponent({ title }: Props) {
  return (
    <div>{title}</div>
  )
}
