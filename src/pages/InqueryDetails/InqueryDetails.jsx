import React, { useState } from 'react'
import { getCustRegColumn } from '../../constant/constant'
import { Container, Grid } from '@mui/material'
import { MaterialReactTable } from 'material-react-table'

const rowData = [
  {
  fName:"Akash",
  lName:"Saroj",
  email:"akash@gmail.com",
  mobile:"7896541236",
  inquery:"hell world inquery inquery inquery inquery inquery"
},
{
  fName:"Akash",
  lName:"Saroj",
  email:"akash@gmail.com",
  mobile:"7896541236",
  inquery:"hell world inquery inquery inquery inquery inquery"
}, {
  fName:"Akash",
  lName:"Saroj",
  email:"akash@gmail.com",
  mobile:"7896541236",
  inquery:"hell world inquery inquery inquery inquery inquery"
}, {
  fName:"Akash",
  lName:"Saroj",
  email:"akash@gmail.com",
  mobile:"7896541236",
  inquery:"hell world inquery inquery inquery inquery inquery"
},
]
const InqueryDetails = () => {

  const [customerData,setCustomerData] = useState([rowData])

  return (
    <Container sx={{ minWidth: '100%' }} className='customer-registration-wrapper'>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit ipsum ducimus delectus rerum est, mollitia molestiae dolores dolorum, quidem eos sunt! Cupiditate molestiae aliquam ea commodi dolor laudantium debitis.</h1>
    <Grid spacing={2} size={{ xs: 12, lg: 12 }}>
      {/* <MaterialReactTable
        style={{ padding: '0.5rem' }}
        columns={getCustRegColumn()}
        data={customerData}
        title=""
        options={{
          paging: true,
          search: false,
          pageSizeOptions: customerData?.length <= 10 ? [5, 10] : [5, 10, 20],
          filtering:true 
        }}
        localization={{
          pagination: {
            labelRowsPerPage: "",
          },
          body: {
            emptyDataSourceMessage: (
              <div className="custom-no-records-message">
                No records found
              </div>
            ),
          }
        }}
        
      /> */}
    </Grid>
  </Container>
  )
}

export default InqueryDetails
