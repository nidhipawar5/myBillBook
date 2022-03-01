import React, { useState } from "react";
import "./items.css";
import Nodata from "../../resources/nodata.png";

export default function User() {
  let Mobile = localStorage.getItem("UserDetails");
  Mobile = Mobile ? JSON.parse(Mobile) : {};
  let mobile_number = Mobile.mobile_number;
  // console.log(Mobile);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemData, setselectedItemData] = useState({});
  let localItems = localStorage.getItem("items");
  localItems = localItems ? JSON.parse(localItems) : [];
  const [items, setItems] = useState(localItems);
  // console.log(localItems);
  // console.log(items);
  function sortAlphbetical(items) {
    return items.sort((a, b) => {
      var a1 = a.itemname.toLowerCase();
      var b1 = b.itemname.toLowerCase();
      return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
    });
  }

  function updateRow(itemIndex) {
    setSelectedItem(itemIndex);
    let itemI = items[itemIndex];
    setselectedItemData(itemI);
  }
  function handleLogout(event) {
    localStorage.clear();
    window.location = "/";
  }
  function handleOnchange(event, input) {
    localItems[selectedItem] = selectedItemData;
    localItems[selectedItem][input] = event.target.value;
    setselectedItemData(localItems[selectedItem]);
    setItems(localItems);
  }

  function handleUpdate(event) {
    event.preventDefault();
    localItems[selectedItem].itemname = event.target.itemName.value;
    localItems[selectedItem].itemcode = event.target.itemCode.value;
    localItems[selectedItem].sellingprice = event.target.sellingPrice.value;
    localItems[selectedItem].purchaseprice = event.target.purchasePrice.value;
    localItems[selectedItem].units = event.target.units.value;
    localItems[selectedItem].date = event.target.date.value;
    localItems = sortAlphbetical(localItems);
    setItems(localItems);
    localStorage.setItem("items", JSON.stringify(localItems));
    setSelectedItem(null);
    setselectedItemData({});
    event.target.reset();
  }
  function searchItems(event) {
    let searchElement = event.target.value;
    let oldItems = localStorage.getItem("items");
    oldItems = oldItems ? JSON.parse(oldItems) : [];
    let searchedItems = localItems.filter((item) => {
      if (
        item.itemname.includes(searchElement) ||
        item.itemcode.includes(searchElement)
      )
        return item;
    });
    setItems(searchedItems);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    let oldItems = localStorage.getItem("items");
    oldItems = oldItems ? JSON.parse(oldItems) : [];
    oldItems.push({
      itemname: event.target.itemName.value,
      itemcode: event.target.itemCode.value,
      sellingprice: event.target.sellingPrice.value,
      purchaseprice: event.target.purchasePrice.value,
      units: event.target.units.value,
      date: event.target.date.value,
    });
    oldItems = sortAlphbetical(oldItems);
    setItems(oldItems);
    console.log(items);
    localStorage.setItem("items", JSON.stringify(oldItems));

    event.target.reset();
  }
  return (
    <div className="h-100">
      <div className="head d-flex ">
        <div className="userno">{mobile_number}</div>
        <div>
          <div
            onClick={handleLogout}
            className=""
            style={{ cursor: "pointer" }}
          >
            Logout
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <div className=" heading2 col-7 ">
          <p>Items</p>
        </div>
        <div className=" heading2-1 col-5 ">
          <p>Create/Edit items</p>
        </div>
      </div>
      <div className="heading1 d-flex">
        <div className="item-content col-7">
          <div className="d-flex ">
            <input
              className="search-1"
              onChange={searchItems}
              type="input"
              placeholder="Search "
            />
          </div>
          <div className="d-flex flex-column">
            <table className="tableDesign table-scroll ">
              <thead>
                <tr className=" content-bar justify-content-around   ">
                  <th>ITEM NAME</th>
                  <th>ITEM CODE</th>
                  <th>SELLING PRICE</th>
                  <th>PURCHASE PRICE</th>
                  <th>UNIT</th>
                  <th>DATE</th>
                </tr>
              </thead>
              <tbody className="body-half-screen">
                {items.map((d, i) => (
                  // <div
                  //
                  // >
                  <tr
                    className=" content-bar1  justify-content-around "
                    onClick={() => updateRow(i)}
                  >
                    <td>{d.itemname}</td>
                    <td>{d.itemcode}</td>
                    <td>{d.sellingprice}</td>
                    <td>{d.purchaseprice}</td>
                    <td>{d.units}</td>
                    <td>{d.date}</td>
                  </tr>
                  // </div>
                ))}
              </tbody>
            </table>
            {!items?.length && (
              <div className="d-flex flex-column mt-5 pt-5 ">
                <img
                  className="mx-auto"
                  src={Nodata}
                  height="100"
                  width="100"
                />
                <div className="mx-auto mt-5 form-heading">
                  You do not have any items to display
                </div>
              </div>
            )}
          </div>
        </div>

        <form
          className="form-content col-5"
          onSubmit={selectedItem == null ? handleFormSubmit : handleUpdate}
        >
          <div className="d-flex">
            <div className=" lf-col col-6">
              <div className="form-heading ">Item Name*</div>
              <input
                name="itemName"
                defaultValue={selectedItemData.itemname}
                onChange={
                  selectedItem == null
                    ? () => {}
                    : (event) => handleOnchange(event, "itemname")
                }
                placeholder="Enter item name"
                required
              />
            </div>
            <div className=" rt-col col-6">
              <div className="form-heading">Item Code</div>
              <input
                placeholder="Enter item code"
                defaultValue={selectedItemData.itemcode}
                onChange={
                  selectedItem == null
                    ? () => {}
                    : (event) => handleOnchange(event, "itemcode")
                }
                name="itemCode"
              />
            </div>
          </div>
          <div className="optional">Stock & Pricing details (Optional)</div>
          <div className="d-flex ">
            <div className="lf-col col-6 ">
              <div className="form-heading">Sales Price</div>
              <input
                type="number"
                placeholder="₹0"
                name="sellingPrice"
                defaultValue={selectedItemData.sellingprice}
                onChange={
                  selectedItem == null
                    ? () => {}
                    : (event) => handleOnchange(event, "sellingprice")
                }
              />
              <div className="form-heading mt-3">Measuring UNIT</div>
              <select
                name="units"
                placeholder="Select Unit"
                defaultValue={selectedItemData.units}
                onChange={
                  selectedItem == null
                    ? () => {}
                    : (event) => handleOnchange(event, "units")
                }
                id="units"
              >
                <option value="">Select Unit</option>
                <option
                  value="pcs"
                  selected={selectedItemData.units == "pcs" ? true : false}
                >
                  pcs
                </option>
                <option
                  value="boxes"
                  selected={selectedItemData.units == "boxes" ? true : false}
                >
                  boxes
                </option>
                <option
                  value="gms"
                  selected={selectedItemData.units == "gms" ? true : false}
                >
                  gms
                </option>
                <option
                  value="kgs"
                  selected={selectedItemData.units == "kgs" ? true : false}
                >
                  kgs
                </option>
                <option
                  value="ltr"
                  selected={selectedItemData.units == "ltr" ? true : false}
                >
                  ltr
                </option>
              </select>
            </div>
            <div className="rt-col col-6">
              <div className="form-heading">Purchase Price</div>
              <input
                placeholder="₹0"
                type="number"
                defaultValue={selectedItemData.purchaseprice}
                onChange={
                  selectedItem == null
                    ? () => {}
                    : (event) => handleOnchange(event, "purchaseprice")
                }
                name="purchasePrice"
              />
              <div className="form-heading mt-3">Opening Stock date</div>
              <input
                type="date"
                defaultValue={selectedItemData.date}
                onChange={
                  selectedItem == null
                    ? () => {}
                    : (event) => handleOnchange(event, "date")
                }
                placeholder="Select date"
                name="date"
              />
            </div>
          </div>
          <input
            className="btn btn-primary w-95"
            type="submit"
            value={selectedItem == null ? "Create" : "Update"}
          />
        </form>
        {/* </form> */}
      </div>
    </div>
  );
}
