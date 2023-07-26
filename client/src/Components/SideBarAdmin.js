
import React from 'react'
import { Link } from 'react-router-dom'

function SideBarAdmin() {
  return (
   <>
     <nav>
        {/* logo */}
        {/* <div className="logo">
          <i class="bx bx-menu menu-icon"></i>
          <span className="logo-name">BMW Thạch Thất</span>
        </div> */}

        {/* side bar */}
        <div className="sidebar">
          {/* logo */}
          <div className="logo">
            <i class="bx bx-menu menu-icon"></i>
            <span className="logo-name">ADMIN PAGE</span>
          </div>
          {/* sidebar-content */}
          <div className="sidebar-content">
            {/* ul */}
            <ul className="lists">
              {/* li */}
              <li className="list">
                <a href="#" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-home-alt icon"></i>
                  {/*  */}
                  <span class="link">Dashboard</span>
                </a>
              </li>
              {/* end li */}
              {/* li */}
              <li className="list">
                <Link href="#" className="nav-link">
                  {/* home icon */}
                  <i class="bx bxs-car icon"></i>
                  {/*  */}
                  <span class="link">Sản phẩm</span>
                </Link>
              </li>
              {/* end li */}
              {/* li */}
              <li className="list">
                <a href="#" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-male-female icon"></i>
                  {/*  */}
                  <span class="link">Khách hàng</span>
                </a>
              </li>
              {/* end li */}
              {/* li */}
              <li className="list">
                <a href="#" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-news icon"></i>
                  {/*  */}
                  <span class="link">Tin tức</span>
                </a>
              </li>
              {/* end li */}

              {/* li */}
              <li className="list">
                <a href="#" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-bar-chart-alt-2 icon"></i>
                  {/*  */}
                  <span class="link">Doanh thu</span>
                </a>
              </li>
              {/* end li */}
              {/* li */}
              <li className="list">
                <a href="#" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-bell icon"></i>
                  {/*  */}
                  <span class="link">Thông báo</span>
                </a>
              </li>
              {/* end li */}
              {/* li */}
              <li className="list">
                <a href="#" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-chat icon"></i>
                  {/*  */}
                  <span class="link">Tin nhắn</span>
                </a>
              </li>
              {/* end li */}
              {/* li */}
              <li className="list">
                <a href="#" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-bar-chart-alt-2 icon"></i>
                  {/*  */}
                  <span class="link">Thống kê</span>
                </a>
              </li>
              {/* end li */}

              {/* li */}
              <li className="list">
                <a href="#" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-cog icon"></i>
                  {/*  */}
                  <span class="link">Cài đặt</span>
                </a>
              </li>
              {/* end li */}
              {/* li */}
              <li className="list">
                <a href="#" className="nav-link">
                  {/* home icon */}
                  <i class="bx bx-log-out icon"></i>
                  {/*  */}
                  <Link to="/home">
                  <span class="link">Đăng xuất</span>
                  </Link>
                 
                </a>
              </li>
              {/* end li */}
            </ul>
            {/* end ul*/}
          </div>
        </div>

      </nav>
   </>
  )
}

export default SideBarAdmin
