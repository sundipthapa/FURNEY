

import { FieldArray, Form, FormikProvider, useFormik } from 'formik';
import React, { useContext, useEffect } from 'react';
import { createOrderApi } from '../../apis/api';
import CartProduct from '../../components/Cart/CartProduct';
import CartSummary from '../../components/Cart/CartSummary';
import { CartContext } from '../../contexts/cart/CartContext';
import Navbar from '../../components/Common/Navbar';



export default function Cart() {

  const userDetail = JSON.parse(localStorage.getItem("user"));
  const user = userDetail._id;


  const { getCarts, cart, saveCarts } = useContext(CartContext)

  useEffect(() => {
    if (user) {
      getCarts()
    }
  }, [user])


  useEffect(() => {
    console.log("Carts", cart)
    if (cart && cart.products) {
      setValues({
        ...values,
        products: cart.products
      })
    }
  }, [cart])

  const formik = useFormik({
    initialValues: {
      products: []
    },
    onSubmit: (data) => {
      console.log(data);
      saveCarts(data)
    }
  })

  const { values, setValues } = formik

  const changeQuantity = (value, index) => {
    values.products[index] = {
      ...values.products[index],
      quantity: value,
    };
    console.log(values);
    setValues({
      ...values,
    });
  };



  const createOrder = (payload) => {
    createOrderApi(user, payload).then(res => {
      
      console.log("Orders  : " , res.data.order)
      esewaCall(res.data.order)
    })
      .catch(err => console.log(err))
  }

  const esewaCall = (order) => {
    console.log(order._idcl);
    var path = "https://uat.esewa.com.np/epay/main";
    var params = {
      amt: order.amount,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: order.amount,
      pid: order._id,
      scd: "EPAYTEST",
      su: "http://localhost:3000/esewa_payment_success",
      fu: "http://localhost:3000/esewa_payment_failed"
    }

    console.log(params);

    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  }

  return (
    <>
      <Navbar />
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <FormikProvider value={formik}>
          <Form noValidate onSubmit={formik.handleSubmit} className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              <ul role="list" className="divide-y divide-gray-200">
                <FieldArray
                  name='products'
                  render={(arrayHelper) => (
                    <>
                      {values.products.length > 0 ? (
                        values.products.map((product, index) =>
                          <CartProduct product={product.product} quantity={product.quantity} changeQuantity={changeQuantity} index={index} removeItem={() => arrayHelper.remove(index)} />
                        )
                      ) : (
                        <div
                          className="inline-flex w-full items-center justify-center rounded-md bg-amber-900 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-amber-600"
                        >
                          Add Product to Cart
                        </div>)}
                    </>
                  )}
                />
              </ul>
              <button
                type='submit'
                className="inline-flex w-full items-center justify-center rounded-md bg-amber-900 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-amber-600"
              >
                Save Cart
              </button>
            </section>
            {/* Order summary */}
            <CartSummary products={values.products} onClickCheckout={() => createOrder(values.products)} />
          </Form>
        </FormikProvider>
      </div>
    </div>
    </>
  )
}
