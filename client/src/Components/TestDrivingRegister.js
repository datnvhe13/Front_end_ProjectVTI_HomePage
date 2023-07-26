import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { closeForm } from "../ReduxTK/Reducer/formSlice";
import { selectListCar } from "../ReduxTK/SelectorRTK/CarSelector";

function TestDrivingRegister(props) {

  // declare State
  let [fullName, setFullName] = useState("");
  let [carType, setCarType] = useState("");
  let [date, setDate] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  // 
  let [listCustomer, setListCustomer] = useState([]);

  // function reset test driving register modal
  let resetModal = ()=>{
    setFullName("");
    setCarType("");
    setDate("");
    setPhoneNumber("");
  }




  // function handleRegister
  let onHandleClick = () => {
    console.log("fullName: ", fullName);
    console.log("carName: ", carType);
    console.log("date: ", date);
    console.log("phone: ", phoneNumber);
    // 
    let customer_New = {
      fullName: fullName,
      carType: carType,
      date: date,
      phoneNumber: phoneNumber
    }
    
    listCustomer.push(customer_New);
    setListCustomer(listCustomer);

    localStorage.setItem("listCustomerRegisterTestDriving", JSON.stringify(listCustomer));

     // alert success
     alert("Đăng ký thành công !")
     // close modal
     dispatch(closeForm())
     // reset textfield in modal
     resetModal();
  };

  // load data from api and display on selector
  let stateRedux = useSelector((state)=> state);
  let listCar = selectListCar(stateRedux)

  console.log('listCar register modal : ',listCar);
  let item = "";
  item = listCar.map((car) => {
    return <option value={car.name}>{car.name}</option>;
  });

  // get all state in Redux by useSelector()
  // let stateRedux = useSelector((state)=> state)
  // let showForm = stateRedux.formRedux.showForm

  const showFormRTK = useSelector((state) => state.formReducer.value)
  const dispatch = useDispatch()

  return (
    <Modal isOpen={showFormRTK}>
      <ModalHeader>ĐĂNG KÝ LÁI THỬ XE</ModalHeader>
      <ModalBody>
        <p>
          Chào anh chị, để có thể{" "}
          <b style={{ color: "red" }}>“Đăng ký lái thử xe ”</b> từ{" "}
          <b style={{ color: "red" }}>BMW Thạch Thất</b>, các anh chị hãy liên
          hệ ngay theo số <b style={{ color: "red" }}>092.246.7899</b> hoặc điền
          thông tin vào form đăng ký dưới đây. Xin cảm ơn!
        </p>

        <form style={{ lineHeight: "2.5" }}>
          <div class="form-group">
            <label for="">
              <b>Họ và tên (*)</b>
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Nhập tên của bạn"
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>

          <div class="form-group">
            <label for="">
              <b>Chọn xe (*)</b>
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              value={carType}
              onChange={(event) => {
                setCarType(event.target.value);
              }}
            >
              {item}
            </select>
          </div>
          <label for="">
            <b>Ngày lái thử (*)</b>
          </label>

          <div
            class="form-group"
            style={{ lineHeight: "1.2", margin: "0 6px" }}
          >
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(event) => {
                setDate(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label for="">
              <b>Điện thoại (*)</b>
            </label>
            <input
              type="number"
              class="form-control"
              id="phone"
              placeholder="Nhập số điện thoại của bạn"
              required
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
          </div>
        </form>
        <button
          onClick={() => {
            onHandleClick();
          }}
          class="btn btn-primary"
          style={{ marginTop: "16px" }}
        >
          Đăng ký
        </button>
      </ModalBody>
      <ModalFooter>
        <Button
          color="danger"
          onClick={() => dispatch(closeForm())}
        >
          Đóng
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default TestDrivingRegister;
