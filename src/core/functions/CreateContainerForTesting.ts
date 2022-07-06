import ReactDOM from "react-dom"
export const createContainerForTesting = () => {
  const container = document.createElement("div")
  return {
    render: (component: JSX.Element) => {
      ReactDOM.render(component, container)
    },
    container,
  }
}
