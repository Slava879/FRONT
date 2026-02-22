import { useEffect, useState } from "react"
import axios, { getAdapter } from "axios"

function App() {
  const [value, setValue] = useState(0)
  const [data, setdata] = useState(null)
  const [isFetched, setisFetched] = useState(false)

  useEffect(() => {
    axios.get('https://api.restful-api.dev/objects').then(res => {
      setdata(res.data)
      setisFetched(true)
      console.log(res.data)
    })
  }, [])

  if(!isFetched) return "Loading..."

  return (
    <div className="main">
      <div className="container">
              {data.map((data, index) => (
                <Card data={data} isFetched={isFetched} />
              ))}
        </div>
    </div>
    
  )
}

const Card = ({data, isFetched}) => {
  const [options, setOptions] = useState([])

  useEffect(() => {
    if(data) {
      const res = getOptions(data?.data)
      setOptions(res)
    }
  }, [data])

  const getOptions = (options) => {
    if (!options) return []

    let keys = Object.keys(options)
    console.log(keys)
    return keys.map(key => ({label: key, value: options[key]}))
  }
  
  if(!isFetched) return "Loading..."

  return (
    <div key={data.id} className="product-card">
      <div className="product-name">{data?.name}</div>
      {options?.map(el => 
        <div className="product-xar">
          <strong>{el?.label} </strong>:
          <span>{el?.value}</span>
        </div>
      )}
    </div>
  )
}

export default App
