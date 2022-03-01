import React, { useState } from "react";
import "./main.css";
import Iso from "../../resources/iso-black.svg";
import axios from "axios";
import moneyBack from "../../resources/guarenty.png";

export default function Main() {
  const [showOtp, setShowOtp] = useState(false);
  const [canResendOtp, setCanResendOtp] = useState(false);

  function handleOtp(event) {
    event.preventDefault();

    axios
      .post(
        "https://niobooks.in/api/web/request_otp",
        {
          mobile_number: document.getElementsByName("phoneNumber")[0].value,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            client: "web",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setShowOtp(true);
        setCanResendOtp(false);
        var count = 60;

        document.getElementById("otpTimer").innerHTML =
          "in " + count + " seconds";
        var counter = setInterval(otpTimer, 1000);
        function otpTimer() {
          count = count - 1;
          if (count <= 0) {
            setCanResendOtp(true);
            clearInterval(counter);
            return;
          }

          document.getElementById("otpTimer").innerHTML =
            "in " + count + " seconds";
        }
      })
      .catch(function (error) {
        alert(error.error);
        console.log(error);
      });
  }
  function handleLogin(event) {
    event.preventDefault();
    axios
      .post(
        "https://niobooks.in/api/web/authenticate",
        {
          mobile_number: event.target.phoneNumber.value,
          otp_code: event.target.otp.value,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            client: "web",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setShowOtp(true);
        if (!response || !response.data || !response.data.mobile_number) {
          alert("User data not found");
        } else {
          localStorage.setItem("UserDetails", JSON.stringify(response.data));
          window.location = "/items";
        }
      })
      .catch(function (error) {
        alert(error);
        console.log(error);
      });
  }

  return (
    <>
      <div className="">
        <div className="con1">
          <div className="d-flex container p-5">
            <div className="col-8 pt-5">
              <div style={{ fontSize: "32px", fontWeight: "bolder" }}>
                Simple GST Billing & Stock Management
              </div>
              <div style={{ fontSize: "30px" }}>software for your business</div>
              <p
                className=" pt-3"
                style={{ fontSize: "20px", color: "grey", fontWeight: "bold" }}
              >
                Atma Nirbhar Vyapaari bane
              </p>
            </div>
            <div className="col-4">
              <form
                onSubmit={showOtp ? handleLogin : handleOtp}
                className="form p-5"
              >
                <div className=" form-title mb-4">Login to myBillBook</div>
                <div className="heading">Enter Mobile Number</div>
                <div className="phoneInput d-flex mb-4">
                  <div className="input-pre">+91</div>
                  <input
                    className="input-check"
                    type="tel"
                    placeholder="9876543321"
                    name="phoneNumber"
                    required
                  />
                </div>
                {showOtp && (
                  <div>
                    <div className="heading">Enter OTP</div>
                    <input
                      placeholder="One Time Password"
                      name="otp"
                      required
                    />
                    <div className="heading mt-1">
                      Resend OTP{" "}
                      {canResendOtp ? (
                        <span className="otpClick" onClick={handleOtp}>
                          Click here
                        </span>
                      ) : (
                        <span id="otpTimer"></span>
                      )}
                    </div>
                    <input
                      type="submit"
                      className="btn btn-primary w-100 mt-4"
                      value="Login"
                    />
                  </div>
                )}
                {!showOtp && (
                  <input
                    type="submit"
                    className="btn btn-primary w-100 mt-4"
                    value="Get OTP"
                  />
                )}
              </form>
            </div>
          </div>
          <div className="container pb-4">
            Made with ❤️ &nbsp; in India
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              <img src={Iso} alt="iso logo" />
            </span>
          </div>
        </div>
        <div className="line"></div>
        <div className="container d-flex ">
          <div className="banner d-flex w-100 justify-content-between py-5">
            <div>
              <h3>1,00,000+</h3>
              <div>Businesses Trust us</div>
            </div>
            <div>
              <h3>30,00,000+</h3>
              <div>Invoices Created</div>
            </div>
            <div>
              <h3> 5,000+</h3>
              <div>Cities & towns in India</div>
            </div>
            <div>
              <h3> 4.5 ★</h3>
              <div>Rating on Google Play</div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="d-flex justify-content-between">
            <div>
              <h3>Now try all benefits of My BillBook app</h3>
              <h3 style={{ fontWeight: "bolder", color: "#FF8C00" }}>
                Free for 14 days
              </h3>
            </div>
            <div className="pb-3">
              <img src={moneyBack} height="100" alt="money logo" />
            </div>
          </div>
        </div>
        <div className="d-flex container card-parent">
          <div className="card ">
            <span className="crownDesign" style={{ color: "#5243d2" }}>
              &#10039;
            </span>
            <h5>Silver Plan</h5>
            <div className="pricing d-flex">
              <span>₹ 1299</span>
              <span style={{ color: "#5243d2" }}>₹ 799</span>
              <span>/ year</span>
            </div>
            <div
              className="highlight"
              style={{ color: "#5243d2", backgroundColor: "#e0deeb" }}
            >
              Mobile+Desktop
            </div>
            <p>
              <span style={{ color: "green" }}>&#10004;</span> Unlimited Stock
              Adustments
            </p>
            <p>
              <span style={{ color: "green" }}>&#10004;</span> GST Reports,
              Profit & Loss Report
            </p>
            <p>
              <span style={{ color: "green" }}>&#10004;</span> Remove MyBillBook
              logo from Invoice
            </p>
            <p>
              <span style={{ color: "green" }}>&#10004;</span> Only Mobile
              device supported
            </p>
            <p>
              <span style={{ color: "green" }}>&#10004;</span> + 5 more features
            </p>
          </div>
          <div className=" special card" style={{ background: "#fbf2e0" }}>
            <div className="redtagPos">
              <div className="redtag">
                <p>Most Popular</p>
              </div>
            </div>
            <span className="crownDesign" style={{ color: "#f9b433" }}>
              &#10039;
            </span>
            <h5>Gold Plan</h5>
            <div className="pricing d-flex">
              <span>₹ 2599</span>
              <span style={{ color: "#f9b433" }}>₹ 1799</span>
              <span>/ year</span>
            </div>
            <div
              className="highlight"
              style={{
                color: "#f9b433",
                backgroundColor: "#ffe5b4",
              }}
            >
              Mobile+Desktop
            </div>
            <p>
              <span style={{ color: "green" }}>&#10004;</span> All Silver
              Features
            </p>
            <p>
              <span style={{ color: "green" }}>&#10004;</span> Add{" "}
              <b>upto 5 Staff</b> to My BillBook
            </p>
            <p>
              <span style={{ color: "green" }}>&#10004;</span> Unlimited Mobile
              + Desktop Logins
            </p>
          </div>
          <div className="card">
            <span className="crownDesign" style={{ color: "#cc6a31" }}>
              &#10039;
            </span>
            <h5>Diamond Plan</h5>
            <div className="pricing d-flex">
              <span>₹ 4599</span>
              <span style={{ color: "#cc6a31" }}>₹ 3500</span>
              <span>/ year</span>
            </div>
            <div
              className="highlight"
              style={{
                color: "#cc6a31",
                backgroundColor: "#fde5d1",
              }}
            >
              Mobile+Desktop
            </div>
            <p>
              <span style={{ color: "green" }}>&#10004;</span> All Gold & Silver
              Features
            </p>
            <p>
              <span style={{ color: "green" }}>&#10004;</span> Add{" "}
              <b>unlimited staff </b> to My BillBook
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
