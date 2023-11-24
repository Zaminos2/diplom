import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { feachOrder, setOrderStatusState } from '../core/redux/orderSendSlice';
import { clearCart } from '../core/redux/cartSlice';


function OrderFormComponent({ totalPrice }) {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    dispatch(feachOrder(data));
    dispatch(clearCart());
    setTimeout(() => dispatch(setOrderStatusState()), 2000);
  };
  function handleClear(){
    dispatch(clearCart());
  }
  return (
    <div className="formWrap">
      <h2 className="orderTitle">Order Details</h2>
      <div className="orderInfo">
        <p className="total">Total</p>
        <p className="orderPrice">{totalPrice}</p>
      </div>

      <Controller
        name="phone_number"
        control={control}
        defaultValue=""
        rules={{
          required: 'Phone number is required',
          pattern: {
            value: /^\+?\d{5,13}$/, 
            message: 'Invalid phone number',
          },
        }}
        render={({ field }) => (
          <>
            <Input
              type="text"
              placeholder="Phone number"
              value={field.value}
              onChange={(e) => {
                field.onChange(e.target.value);
              }} />
            {errors.phone_number && (
              <p className="errorText">{errors.phone_number.message}</p>
            )}
          </>
        )}
      />

      <Button className="orderButton" size="large" onClick={handleSubmit(onSubmit)}>
        Order
      </Button>
      <Button className="orderButton" size="large" onClick={handleClear}>
        Clear cart
      </Button>
    </div>
  );
}

export default OrderFormComponent;
