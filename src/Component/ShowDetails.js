import React from 'react'

const ShowDetails = () => {

    // const Table = styled.table`
    // width: 100%;
    // `
    // const TH = styled.th`
    //   border: 1px solid;
    // width: 100%;
    // `
  return (
    <>
        <div>
            <table>
                <tbody>
                  <tr>
                    <th>Sr.No.</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>2021-11-25</td>
                    <td>test123</td>
                    <td>Description</td>
                    <td>
                      <button>*</button>
                      <button>&#9998;</button>
                      <button>&#10008;</button>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ShowDetails