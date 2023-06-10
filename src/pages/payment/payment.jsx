import $ from "jquery";
import Cleave from "cleave.js";
import { useEffect } from "react";
import "./payment.css";
function Payment() {
  useEffect(() => {
    const $field = $("input");
    const $zoomBtn = $(".zoomBtn");
    const $closeBtn = $(".closeBtn");
    const $overlay = $(".overlay");
    let selectedCardIcon;

    $field.on("focus", function () {
      $(this).parent().addClass("focus");
      $(this).parent().removeClass("active");
    });

    $field.on("blur", function () {
      $(this).parent().removeClass("focus");

      if ($(this).val() !== "") {
        $(this).parent().addClass("active");
      } else {
        $(this).parent().removeClass("active");
      }
    });

    function closeZoom() {
      $closeBtn.parent().removeClass("zoomOn");
      $overlay.removeClass("open");
    }

    $zoomBtn.on("click", function () {
      $(this).parent().addClass("zoomOn");
      $overlay.addClass("open");
    });

    $closeBtn.on("click", function () {
      closeZoom();
    });

    $overlay.click(function () {
      closeZoom();
    });

    $(document).keyup(function (e) {
      if (e.keyCode === 27) {
        // escape key maps to keycode `27`
        closeZoom();
      }
    });
    // Setup Cleave.js
    const cleaveCreditCard = new Cleave(".credit_card_number", {
      creditCard: true,
      onCreditCardTypeChanged: function (type) {
        if (selectedCardIcon) {
          selectedCardIcon.removeClass("active");
        }

        selectedCardIcon = $(".icon-" + type);

        if (selectedCardIcon) {
          selectedCardIcon.addClass("active");
        }
      },
    });
    // Clean up event listeners on component unmount
    return () => {
      $field.off();
      $zoomBtn.off();
      $closeBtn.off();
      $overlay.off();
      $(document).off("keyup");
      cleaveCreditCard.destroy();
    };
  }, []);

  return (
    <>
      <div className="container">
        <h1>Payment form</h1>

        <div className="fieldRow">
          <input id="name" type="name" placeholder="" />
          <label htmlFor="name">First name</label>
          <i htmlFor="name" className="fa fa-user"></i>
        </div>

        <div className="fieldRow">
          <input id="surname" type="name" placeholder="" />
          <label htmlFor="surname">Last name</label>
          <i htmlFor="surname" className="fa fa-user"></i>
        </div>

        <div className="blank_space">
          <div className="fieldRow credit_card">
            <input
              id="cc"
              className="credit_card_number"
              type="text"
              placeholder=""
            />
            <label htmlFor="cc">Credit card number</label>
            <i htmlFor="cc" className="fa fa-credit-card"></i>
            <div className="zoomBtn">ZOOM</div>
            <div className="closeBtn">
              <i className="fa fa-times"></i>
            </div>
          </div>
        </div>

        <div className="fieldRow col2">
          <input id="cvv" type="text" placeholder="XXX" />
          <label htmlFor="cvv">CVV</label>
          <i htmlFor="cvv" className="fa fa-lock"></i>
        </div>

        <div className="fieldRow col2 last">
          <input id="date" type="text" placeholder="mm/yy" />
          <label htmlFor="date">Date</label>
          <i htmlFor="date" className="fa fa-calendar"></i>
        </div>

        <button type="submit">PAY NOW</button>
      </div>

      <div className="overlay"></div>
    </>
  );
}

export default Payment;
