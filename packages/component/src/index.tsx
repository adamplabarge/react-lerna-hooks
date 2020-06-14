import * as React from "react"

export interface IComponentProps {}

export default function IApp(props: IComponentProps) {

  React.useEffect(() => {
    console.log('Running Hook')
  })

  return <h1>Component</h1>
}