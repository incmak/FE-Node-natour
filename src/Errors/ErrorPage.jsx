import { useRouteError } from 'react-router-dom' // eslint-disable-line import/no-extraneous-dependencies

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error) // eslint-disable-line no-console
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
