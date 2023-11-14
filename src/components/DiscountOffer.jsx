import { discount } from "../utils";
import { Button, Input, Select, Space } from "antd";
import "./styles/discountOffer.css";
import { feachSale, setSaleStatusState } from "../core/redux/orderSendSlice";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { clearCart } from "../core/redux/cartSlice";

function DiscountOffer() {
  const options = [
    {
      label: "+49",
      value: "+49",
    },
    {
      label: "+380",
      value: "+380",
    },
  ];
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(feachSale(data));
    dispatch(clearCart());
    setTimeout(() => dispatch(setSaleStatusState()), 2000);
  };

  return (
    <div className="discountWrapper">
      <div className="discountImgWrap">
        <img src={discount} alt="discountImg" className="discountImg" />
      </div>
      <div className="inputWrap">
        <h2 className="dicountTitle">5% off</h2>
        <h3 className="discountCondition">on the first order</h3>
        <Space direction="vertical" size="large">
          <Space.Compact size="large" style={{ width: "65%" }}>
            <Select defaultValue="+49" options={options} />
            <Controller
              name="phone_number"
              control={control}
              defaultValue=""
              rules={{
                required: "Phone number is required",
                pattern: {
                  value: /^\+?\d{5,13}$/,
                  message: "Invalid phone number",
                },
              }}
              render={({ field }) => (
                <>
                  <Input
                    className="phoneInput"
                    type="text"
                    placeholder="Phone number"
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                  />
                </>
              )}
            />
          </Space.Compact>
          {errors.phone_number && (
            <p className="errorText">{errors.phone_number.message}</p>
          )}
        </Space>
        <Button
          className="getDiscount"
          size="large"
          style={{ width: "65%" }}
          onClick={handleSubmit(onSubmit)}
        >
          Get a discount
        </Button>
      </div>
    </div>
  );
}
export default DiscountOffer;
