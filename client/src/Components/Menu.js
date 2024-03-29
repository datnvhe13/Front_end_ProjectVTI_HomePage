import { Link } from "react-router-dom";
import RegisterModal from "./../Components/RegisterModal";
import TestDrivingRegister from "../Components/TestDrivingRegister";
import { useDispatch } from "react-redux";
import { showForm } from "../ReduxTK/Reducer/formSlice";
import { showForm2 } from "../ReduxTK/Reducer/formSlice2";

function Menu(props) {

  const dispatch = useDispatch()

  return (
    <>
      <nav
      // style={{position: "fixed"}}
       class="navbar navbar-expand-lg navbar-dark bg-black">
        <div class="container-fluid">
          <Link class="navbar-brand" to="#">
            BMW Thạch Thất
          </Link>
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/home">
                  TRANG CHỦ
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/introduce">
                  GIỚI THIỆU
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/priceCarTable">
                  BẢNG GIÁ XE
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/buyingOnInstallment">
                  MUA XE TRẢ GÓP
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/news">
                  TIN TỨC
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  LIÊN HỆ
                </Link>
              </li>
              {/* Admin page */}
              
            </ul>
            <form class="d-flex">
              <button
                onClick={() => dispatch(showForm())}
                type="button"
                class="btn btn-danger twoButton"
              >
                Đăng ký lái thử
              </button>
              <button onClick={() => dispatch(showForm2())} type="button" class="btn btn-danger">
                Báo giá ưu đãi
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* modal */}
      <RegisterModal 
      // priceNote={priceNote}
      // onHandleClosePriceNoteForm={onHandleClosePriceNoteForm}
      />

      <TestDrivingRegister
        // onHandleCloseForm={onHandleCloseForm}
      />
    </>
  );
}

export default Menu;
