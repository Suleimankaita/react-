import React from 'react'

const table1 = ({find}) => {
  return (
                   
    <table>
    <tbody>
    <tr>
      <td>weight</td>
      
      <td>{find.weight3}</td>

      </tr>
    
    <tr>
      <td>height</td>
      
      <td>{find.height1}</td>

      </tr>
    
    <tr>
      <td>quality</td>
      
      <td><span style={{whiteSpace:"nowrap"}}>high quality</span></td>

     </tr>
    
       </tbody>
   </table>
  )
}

export default table1