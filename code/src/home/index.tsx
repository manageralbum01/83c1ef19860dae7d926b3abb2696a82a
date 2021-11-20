import { Button, TextField } from '@mui/material'
import { Styles } from './index.styles'

export const Home = () => {
  return (
    <Styles>
      <h1>GitHub Profiler</h1>

      <div>
        <div>github.com/</div>

        <TextField />
        <Button>Search</Button>
      </div>

      <hr />
      <div>
        <h3>TODO</h3>
        <ul>
          <li>
            <input type="checkbox" /> Get data from the API
          </li>
          <li>
            <input type="checkbox" /> Show loading indicator
          </li>
          <li>
            <input type="checkbox" /> Show parsed data
          </li>
        </ul>
      </div>
    </Styles>
  )
}
