

import React from 'react'

function ProductAdminPage() {


    
  return (
    <div className='productAdminPageContainer'>
      {/* Search */}
      <div class="row" style={{marginBottom: "16px" }}>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h3><b style={{color: "green"}}>Xin chào ADMIN</b></h3>

            </div>
        </div>
        {/* Search */}
        <div class="row" style={{border: "1px solid rgb(206, 201, 201)", padding: "12px 6px", marginBottom: "16px" }}>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="panel panel-default">
                <div class="panel-body" 
                style={{display: "flex"}}>
                  {/* <!-- input to search --> */}
                  <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8" 
                  style={{ margin: "0 10px"}}>
                    <input type="text" id="inputSearch" class="form-control" value="" />
                  </div>
                  {/* <!-- search button --> */}
                  <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <button type="button" class="btn btn-primary" onclick="handleToSearch()">Search</button>
                  </div>
                </div>
              </div>

            </div>
        </div>
        
        {/* content */}
        <div class="row" style={{border: "1px solid rgb(206, 201, 201)", padding: "12px 6px"}}>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

              <div class="panel panel-default">
                <div class="panel-body">
                  <h3><b style={{color: "green"}}>DANH SÁCH SẢN PHẨM</b></h3>
                  {/* <!-- button --> */}
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add
                    new</button>
                  {/* <!-- table display list product --> */}
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Information</th>
                        <th>Detail</th>
                        <th>Image</th>
                        <th>YearOfManu</th>
                        <th>Category</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody id="tbProductTable">

                    <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>
                        <button type="button" class="btn btn-primary">Edit</button>
                        </td>
                        <td>
                        <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>
                        <button type="button" class="btn btn-primary">Edit</button>
                        </td>
                        <td>
                        <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>
                        <button type="button" class="btn btn-primary">Edit</button>
                        </td>
                        <td>
                        <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>
                        <button type="button" class="btn btn-primary">Edit</button>
                        </td>
                        <td>
                        <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>
                        <button type="button" class="btn btn-primary">Edit</button>
                        </td>
                        <td>
                        <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                     


                    </tbody>
                  </table>


                </div>
              </div>

            </div>
        </div>

    </div>
  )
}

export default ProductAdminPage


